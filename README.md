# InvoicePilot - Sales Invoice Web Application

## 🚀 Project Overview

**InvoicePilot** is a comprehensive, production-ready **Sales Invoice Management System** built with modern web technologies. It enables businesses to create, manage, send, and track professional invoices with ease.

### ✨ Key Features

- **Professional Invoice Generation** - Create customizable invoices with GST calculations
- **Multi-Role Access Control** - SuperAdmin, Company Admin, Staff, and Customer portals
- **Customer Management** - Manage unlimited customers and billing information
- **Order & Invoice Tracking** - Complete order-to-invoice workflow
- **PDF Generation & Email Delivery** - Automatic invoice PDF generation and email notifications
- **Advanced Reporting** - Real-time financial reports and analytics
- **Secure Cloud Storage** - Firebase-backed secure storage for all documents
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile

---

## 🏗️ Architecture & Tech Stack

### Frontend

- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4+** - Modern, utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Efficient form state management
- **Zod** - Schema validation

### Backend

- **Next.js API Routes** - Serverless API endpoints
- **Firebase Firestore** - NoSQL database
- **Firebase Authentication** - User authentication & authorization
- **Firebase Storage** - Document storage

### Services

- **Nodemailer** - Email delivery service
- **PDFKit** - PDF generation
- **Luxon** - Date/time utilities

### Deployment

- **Vercel** - Optimized Next.js hosting platform

---

## ⚡ Quick Start

### Prerequisites

- Node.js 18+
- Firebase account (free tier)
- Gmail account (for email service)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd invoicepilot

# All dependencies are already installed
# Just run the development server
npm run dev
```

Visit http://localhost:3000

### Environment Setup

1. Copy `.env.local` example and fill in your Firebase credentials
2. Enable Firebase services (Firestore, Auth, Storage)
3. Configure Gmail app password for email service
4. Set up Firestore collections and security rules

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/              # Authentication
│   ├── (admin)/             # Company Admin Portal
│   ├── (superadmin)/        # Super Admin Portal
│   ├── (customer)/          # Customer Portal
│   ├── api/                 # API Routes
│   ├── page.tsx             # Landing page
│   ├── layout.tsx           # Root layout
│   └── globals.css
│
├── components/              # Reusable components
├── lib/                     # Utilities & services
├── types/                   # TypeScript definitions
└── public/                  # Static assets
```

---

## 🔐 User Roles

| Role           | Access    | Responsibilities                             |
| -------------- | --------- | -------------------------------------------- |
| **SuperAdmin** | Full      | Manages all companies, admins, reports       |
| **Admin**      | Company   | Manages customers, invoices, staff, settings |
| **Staff**      | Limited   | Creates invoices for assigned customers      |
| **Customer**   | Read-only | Views own invoices, downloads PDFs           |

---

## 🛠️ Key Setup Files Created

✅ **Type Definitions**

- `src/types/user.ts` - User authentication types
- `src/types/company.ts` - Company data
- `src/types/customer.ts` - Customer information
- `src/types/order.ts` - Order management
- `src/types/invoice.ts` - Invoice data

✅ **Library & Utilities**

- `src/lib/firebase.ts` - Firebase initialization
- `src/lib/auth.ts` - Authentication & role checks
- `src/lib/validations.ts` - Zod schemas for all forms
- `src/lib/constants.ts` - App constants & settings
- `src/lib/utils.ts` - Helper utilities
- `src/lib/mailer.ts` - Email service (Nodemailer)
- `src/lib/pdfGenerator.ts` - PDF invoice generation

✅ **Pages & Components**

- `src/app/(auth)/login/page.tsx` - Login form
- `src/app/(auth)/register/page.tsx` - Registration form
- `src/app/(auth)/layout.tsx` - Auth layout
- `src/app/(admin)/layout.tsx` - Admin layout
- `src/app/(admin)/dashboard/page.tsx` - Admin dashboard
- `src/app/page.tsx` - Landing page with features

✅ **API Routes**

- `src/app/api/auth/login/route.ts` - Login endpoint
- `src/app/api/auth/register/route.ts` - Registration endpoint

---

## 🚀 Next Steps to Complete

### Phase 1: Auth & Core (In Progress)

- [ ] Complete Firebase Admin SDK setup
- [ ] Implement email verification
- [ ] Add password reset flow
- [ ] Setup session management

### Phase 2: Admin Portal

- [ ] Customer management CRUD
- [ ] Order creation & management
- [ ] Invoice generation & customization
- [ ] PDF & Email sending

### Phase 3: Super Admin Portal

- [ ] Company management
- [ ] User management
- [ ] Global reporting
- [ ] System settings

### Phase 4: Features

- [ ] Payment tracking
- [ ] Advanced reporting
- [ ] Export functionality
- [ ] API documentation

### Phase 5: Deployment

- [ ] Firebase production setup
- [ ] Vercel deployment
- [ ] Security hardening
- [ ] Performance optimization

---

## 📧 Email Configuration

### Gmail Setup

1. Enable 2-Factor Authentication
2. Generate App Password
3. Add to `.env.local`:

```env
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password
```

### Email Templates Available

- Invoice delivery with PDF
- Welcome email
- Password reset
- Payment reminders
- Order confirmation

---

## 📊 Database Collections

### Structure Overview

```
users/           - User accounts with roles
companies/       - Company information
customers/       - Customer records
orders/          - Order history
invoices/        - Invoice management
reports/         - Monthly summaries
```

---

## 🔒 Security Features

- Role-based access control (RBAC)
- Firebase Authentication with JWT
- Firestore security rules
- Environment variable protection
- Input validation with Zod
- HTTPS-only in production
- CSRF protection
- XSS prevention with React

---

## 📊 Features Implemented

✅ Project scaffolding with Next.js 14+
✅ TypeScript configuration
✅ Tailwind CSS v4+ setup
✅ Type definitions for all entities
✅ Firebase initialization
✅ Authentication utilities & role checks
✅ Form validation schemas (Zod)
✅ Email service (Nodemailer)
✅ PDF generation (PDFKit)
✅ Landing page with hero section
✅ Auth pages (login, register)
✅ Admin dashboard template
✅ Helper utilities for calculations
✅ Date/currency formatting
✅ Constants for app config

---

## 🧪 Testing

```bash
# Run tests
npm test

# Test with coverage
npm test -- --coverage

# Watch mode
npm test -- --watch
```

---

## 🚀 Deployment

### Vercel Deployment

```bash
# Push to GitHub
git add .
git commit -m "Setup InvoicePilot"
git push origin main

# Deploy on Vercel (auto-deploys from GitHub)
vercel deploy
```

### Environment Variables on Vercel

Set all `.env.local` variables in Vercel dashboard:

- Firebase credentials
- SMTP configuration
- App URLs

---

## 📚 Libraries Used

| Library         | Purpose          |
| --------------- | ---------------- |
| Next.js         | React framework  |
| Firebase        | Backend services |
| Tailwind CSS    | Styling          |
| Zod             | Validation       |
| Luxon           | Date handling    |
| Nodemailer      | Email service    |
| PDFKit          | PDF generation   |
| Lucide React    | Icons            |
| React Hook Form | Forms            |

---

## 🔗 Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Zod Documentation](https://zod.dev)
- [Vercel Deployment](https://vercel.com/docs)

---

## 📄 License

MIT License - Free for commercial use

---

## 🤝 Support

For issues or questions:

1. Check documentation files (SETUP_GUIDE.md)
2. Review Firebase console
3. Check Vercel logs
4. Review browser console

---

**Built with ❤️ using Next.js, Firebase, and Tailwind CSS**

**Status**: Core setup complete. Ready for feature development.

**Last Updated**: October 27, 2025
