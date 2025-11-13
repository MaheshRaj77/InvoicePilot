# InvoicePilot - Sales Invoice Web Application

## Project Setup Completion Guide

### ✅ Already Completed

1. **Dependencies Installed**

   - Next.js 16+ with TypeScript
   - Firebase (auth, firestore, storage)
   - Nodemailer for email
   - PDF Generation (pdfkit, jspdf)
   - Tailwind CSS v4+
   - Shadcn/UI, Radix UI
   - Form validation (zod, react-hook-form)
   - Date utilities (luxon)

2. **Type Definitions Created**

   - `src/types/user.ts` - User roles and authentication
   - `src/types/company.ts` - Company details
   - `src/types/customer.ts` - Customer information
   - `src/types/order.ts` - Order management
   - `src/types/invoice.ts` - Invoice data structures

3. **Library/Utilities Created**

   - `src/lib/firebase.ts` - Firebase initialization
   - `src/lib/auth.ts` - Authentication utilities and role checks
   - `src/lib/validations.ts` - Zod schemas for all forms
   - `src/lib/constants.ts` - App constants, roles, statuses
   - `src/lib/utils.ts` - Helper utilities (formatting, validation, calculations)
   - `src/lib/mailer.ts` - Nodemailer setup and email templates
   - `src/lib/pdfGenerator.ts` - PDF invoice generation

4. **Layout & Auth Pages Started**
   - `src/app/(auth)/layout.tsx` - Auth layout wrapper
   - `src/app/(auth)/login/page.tsx` - Login form with validation

### 📋 Next Steps for Implementation

#### Step 1: Complete Authentication Pages

```bash
# Create remaining auth pages:
- src/app/(auth)/register/page.tsx
- src/app/(auth)/forgot-password/page.tsx
- src/app/(auth)/verify-email/page.tsx
```

#### Step 2: Create API Routes

```bash
# Authentication API routes:
- src/app/api/auth/login/route.ts
- src/app/api/auth/register/route.ts
- src/app/api/auth/logout/route.ts

# Invoice API routes:
- src/app/api/invoices/create/route.ts
- src/app/api/invoices/list/route.ts
- src/app/api/invoices/[invoiceId]/route.ts
- src/app/api/invoices/pdf/route.ts
- src/app/api/invoices/email/route.ts

# Order API routes:
- src/app/api/orders/create/route.ts
- src/app/api/orders/[orderId]/route.ts

# Customer API routes:
- src/app/api/customers/create/route.ts
- src/app/api/customers/[customerId]/route.ts

# Contact form:
- src/app/api/contact/route.ts
```

#### Step 3: Create Reusable Components

```bash
# UI Components:
- src/components/ui/Button.tsx
- src/components/ui/Input.tsx
- src/components/ui/Card.tsx
- src/components/ui/Table.tsx
- src/components/ui/Modal.tsx

# Layout Components:
- src/components/layout/Navbar.tsx
- src/components/layout/Sidebar.tsx
- src/components/layout/Footer.tsx

# Form Components:
- src/components/forms/InvoiceForm.tsx
- src/components/forms/CustomerForm.tsx
- src/components/forms/OrderForm.tsx
```

#### Step 4: Create Admin Dashboard Pages

```bash
# Company Admin Portal:
- src/app/(admin)/layout.tsx
- src/app/(admin)/dashboard/page.tsx
- src/app/(admin)/customers/page.tsx
- src/app/(admin)/customers/[customerId]/page.tsx
- src/app/(admin)/orders/page.tsx
- src/app/(admin)/orders/new/page.tsx
- src/app/(admin)/invoices/page.tsx
- src/app/(admin)/invoices/new/page.tsx
- src/app/(admin)/invoices/[invoiceId]/page.tsx
- src/app/(admin)/reports/page.tsx
- src/app/(admin)/settings/page.tsx
- src/app/(admin)/staff/page.tsx
- src/app/(admin)/staff/new/page.tsx

# Super Admin Portal:
- src/app/(superadmin)/layout.tsx
- src/app/(superadmin)/dashboard/page.tsx
- src/app/(superadmin)/companies/page.tsx
- src/app/(superadmin)/companies/[companyId]/page.tsx
- src/app/(superadmin)/users/page.tsx
- src/app/(superadmin)/users/[userId]/page.tsx
- src/app/(superadmin)/reports/page.tsx
- src/app/(superadmin)/settings/page.tsx

# Customer Portal:
- src/app/(customer)/layout.tsx
- src/app/(customer)/dashboard/page.tsx
- src/app/(customer)/orders/page.tsx
- src/app/(customer)/invoices/page.tsx
- src/app/(customer)/invoices/[invoiceId]/page.tsx
- src/app/(customer)/profile/page.tsx
```

#### Step 5: Create Landing Pages

```bash
- src/app/page.tsx (Home/Hero)
- src/app/pricing/page.tsx
- src/app/features/page.tsx
- src/app/about/page.tsx
- src/app/contact/page.tsx
```

### 🔧 Firebase Firestore Collections Setup

```javascript
// users collection
{
  uid: string,
  name: string,
  email: string,
  role: "superadmin" | "admin" | "staff" | "customer",
  companyId?: string,
  createdAt: timestamp,
  isActive: boolean
}

// companies collection
{
  id: string,
  name: string,
  gstNumber: string,
  address: string,
  contactEmail: string,
  contactPhone?: string,
  createdBy: string,
  createdAt: timestamp,
  isActive: boolean
}

// customers collection
{
  id: string,
  companyId: string,
  name: string,
  email: string,
  phone: string,
  address: string,
  gstNumber?: string,
  createdAt: timestamp,
  isActive: boolean
}

// orders collection
{
  id: string,
  customerId: string,
  companyId: string,
  items: array,
  totalAmount: number,
  status: "pending" | "approved" | "cancelled",
  createdAt: timestamp,
  updatedAt: timestamp
}

// invoices collection
{
  id: string,
  invoiceNumber: string,
  orderId: string,
  companyId: string,
  customerId: string,
  gstRate: number,
  discount: number,
  totalAmount: number,
  status: "paid" | "unpaid",
  pdfUrl?: string,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### 🚀 Firebase Security Rules Example

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth.uid == userId ||
                      request.auth.token.role == 'superadmin';
      allow write: if request.auth.token.role == 'superadmin';
    }

    // Companies collection
    match /companies/{companyId} {
      allow read: if request.auth.token.companyId == companyId ||
                      request.auth.token.role == 'superadmin';
      allow write: if request.auth.token.role == 'admin' ||
                       request.auth.token.role == 'superadmin';
    }

    // Customers collection
    match /customers/{customerId} {
      allow read: if request.auth.token.companyId == resource.data.companyId ||
                      request.auth.token.role == 'superadmin';
      allow write: if request.auth.token.companyId == resource.data.companyId ||
                       request.auth.token.role == 'admin';
    }

    // Similar rules for orders and invoices...
  }
}
```

### 🛠️ Environment Variables

Create `.env.local` with:

```env
# Firebase Config
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Firebase Admin SDK
FIREBASE_PRIVATE_KEY_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
FIREBASE_CLIENT_ID=

# Nodemailer SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=
SMTP_PASSWORD=
SMTP_FROM=

# App Config
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### 📦 Key Technologies Used

- **Next.js 14+**: Full-stack React framework with App Router
- **TypeScript**: Type safety across the project
- **Tailwind CSS v4+**: Modern CSS utility framework
- **Firebase**: Backend services (Auth, Firestore, Storage)
- **Nodemailer**: Email delivery service
- **PDFKit**: PDF generation
- **Zod**: Schema validation
- **React Hook Form**: Efficient form handling
- **Luxon**: Date manipulation
- **Lucide React**: Icon library

### 🔐 Authentication Flow

1. User registers → Firebase Auth creates account
2. Custom claims set via Firebase Admin SDK (role, companyId)
3. User logs in → JWT token stored in session
4. API routes verify token and claims
5. Pages protected by role-based middleware

### 📧 Email Features

- Invoice delivery with PDF attachment
- Password reset links
- Welcome emails
- Order confirmations
- Payment reminders

### 📄 PDF Invoice Features

- Professional invoice layout
- Company header and footer
- Item line items with quantities and prices
- GST calculations
- Discount application
- Amount due highlighting
- Company and customer information

### 🚀 Deployment

Deploy to Vercel:

```bash
# Push code to GitHub
git push origin main

# Vercel will auto-deploy
# Set environment variables in Vercel dashboard
```

### 📞 Support

For questions or issues:

1. Check Firebase console for errors
2. Review browser console for client-side errors
3. Check server logs for API errors
4. Verify environment variables are set correctly

---

**Status**: Core libraries and types setup complete. Ready for component and API development.

**Last Updated**: October 27, 2025
