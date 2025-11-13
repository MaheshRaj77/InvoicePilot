# Project Folder Structure Guide

This document describes the complete folder structure of InvoicePilot with all role-based portals and API endpoints.

## 📁 Directory Overview

```
src/
├── app/                          # Next.js App Router
│   ├── (admin)/                  # Admin Portal
│   │   ├── layout.tsx            # Admin dashboard layout
│   │   ├── dashboard/page.tsx    # Admin home dashboard
│   │   ├── customers/
│   │   │   ├── page.tsx          # Customer list
│   │   │   └── [id]/page.tsx     # Customer detail
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── orders/
│   │   │   ├── page.tsx
│   │   │   └── [id]/page.tsx
│   │   ├── invoices/
│   │   │   ├── page.tsx          # Invoice list
│   │   │   ├── create/page.tsx   # Create invoice
│   │   │   └── [id]/page.tsx     # Invoice detail
│   │   ├── reports/page.tsx
│   │   ├── settings/page.tsx
│   │   └── system/               # Super Admin functions
│   │       ├── dashboard/page.tsx
│   │       ├── companies/page.tsx
│   │       └── users/page.tsx
│   │
│   ├── (auth)/                   # Public Authentication
│   │   ├── layout.tsx
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── forgot-password/page.tsx
│   │
│   ├── api/                      # API Routes
│   │   ├── auth/
│   │   │   ├── login/route.ts
│   │   │   └── register/route.ts
│   │   ├── invoices/
│   │   │   ├── generate/route.ts    # PDF generation
│   │   │   └── email/route.ts       # Email sending
│   │   ├── orders/route.ts
│   │   └── users/route.ts
│   │
│   ├── page.tsx                  # Landing page
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── loading.tsx               # Loading skeleton
│   ├── not-found/page.tsx        # 404 page
│   └── middleware.ts             # Route protection & role checking
│
├── components/                   # React Components
│   ├── ui/                       # shadcn/ui & Radix components
│   │   └── index.ts
│   ├── forms/                    # Form components
│   │   └── index.ts
│   ├── tables/                   # Data table components
│   │   └── index.ts
│   ├── charts/                   # Chart/analytics components
│   │   └── index.ts
│   ├── navbar.tsx                # Top navigation
│   ├── sidebar.tsx               # Side navigation
│   ├── footer.tsx                # Footer
│   └── protected-route.tsx       # Role-based route wrapper
│
├── lib/                          # Utility Libraries
│   ├── firebase/
│   │   └── index.ts              # Firebase exports
│   ├── pdf/
│   │   └── index.ts              # PDF generation exports
│   ├── mail/
│   │   └── index.ts              # Email service exports
│   ├── utils/
│   │   └── index.ts              # General utilities
│   ├── constants/
│   │   └── index.ts              # App constants
│   ├── firebase.ts               # Firebase initialization
│   ├── pdfGenerator.ts           # PDF generation logic
│   ├── mailer.ts                 # Email configuration
│   ├── auth.ts                   # Auth utilities
│   ├── validations.ts            # Zod schemas
│   ├── utils.ts                  # Helper functions
│   └── constants.ts              # Constants & enums
│
├── hooks/                        # Custom React Hooks
│   ├── useAuth.ts                # Auth context hook
│   ├── useUserRole.ts            # Role checking hook
│   └── useFirestore.ts           # Firestore CRUD hook
│
├── types/                        # TypeScript Definitions
│   ├── user.ts                   # User types
│   ├── company.ts                # Company types
│   ├── customer.ts               # Customer types
│   ├── order.ts                  # Order types
│   └── invoice.ts                # Invoice types
│
└── styles/
    └── theme.css                 # Theme overrides
```

## 🔐 Route Access Control

| Route                           | Public | Admin                 | Super Admin | Staff | Customer |
| ------------------------------- | ------ | --------------------- | ----------- | ----- | -------- |
| `/`                             | ✅     | ✅                    | ✅          | ✅    | ✅       |
| `/login`, `/register`           | ✅     | ✅                    | ✅          | ✅    | ✅       |
| `/dashboard`                    | ❌     | ✅                    | ✅          | ✅    | ✅       |
| `/customers`, `/customers/[id]` | ❌     | ✅                    | ❌          | ❌    | ❌       |
| `/orders`, `/orders/[id]`       | ❌     | ✅                    | ❌          | ❌    | ❌       |
| `/invoices/*`                   | ❌     | ✅                    | ❌          | ❌    | ✅       |
| `/reports`                      | ❌     | ✅                    | ❌          | ❌    | ❌       |
| `/settings`                     | ❌     | ✅                    | ❌          | ❌    | ❌       |
| `/system/*`                     | ❌     | ✅ (Super Admin Role) | ❌          | ❌    | ❌       |

## 🚀 API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Invoices

- `POST /api/invoices/generate` - Generate PDF invoice
- `POST /api/invoices/email` - Send invoice via email

### Orders

- `POST /api/orders` - Create new order

### Users

- `POST /api/users` - Register new user

## 📦 Key Files & Their Purpose

### App Routes

| File                 | Purpose                              |
| -------------------- | ------------------------------------ |
| `page.tsx`           | Landing page - public accessible     |
| `(auth)/layout.tsx`  | Auth pages wrapper                   |
| `(admin)/layout.tsx` | Admin dashboard wrapper with sidebar |
| `middleware.ts`      | Role-based route protection          |

### Libraries

| File                  | Purpose                    |
| --------------------- | -------------------------- |
| `lib/firebase.ts`     | Firebase initialization    |
| `lib/auth.ts`         | Authentication utilities   |
| `lib/validations.ts`  | Zod validation schemas     |
| `lib/mailer.ts`       | Nodemailer configuration   |
| `lib/pdfGenerator.ts` | PDF generation with PDFKit |
| `lib/utils.ts`        | Helper functions           |
| `lib/constants.ts`    | App-wide constants         |

### Types

| File                | Purpose             |
| ------------------- | ------------------- |
| `types/user.ts`     | User & auth types   |
| `types/company.ts`  | Company information |
| `types/customer.ts` | Customer data       |
| `types/order.ts`    | Order management    |
| `types/invoice.ts`  | Invoice data        |

### Hooks

| File                    | Purpose                 |
| ----------------------- | ----------------------- |
| `hooks/useAuth.ts`      | Firebase auth listener  |
| `hooks/useUserRole.ts`  | Role-based checks       |
| `hooks/useFirestore.ts` | Generic CRUD operations |

## 🔄 Role-Based Portal Access

### Admin Portal (`/admin/*`)

Access: Users with `admin` role
Pages:

- Dashboard - Overview & analytics
- Customers - Manage customers
- Products - Manage products
- Orders - View & manage orders
- Invoices - Create & manage invoices
- Reports - Business analytics
- Settings - Company settings
- System (Super Admin only) - Manage all companies & users

### Super Admin Portal (`/system/*`)

Access: Users with `admin` role AND super admin privileges
Pages:

- Dashboard - System overview
- Companies - Manage all companies
- Users - Manage all users
- Reports - System analytics

## 🛡️ Middleware & Route Protection

The `middleware.ts` file:

1. Checks for auth token in cookies
2. Validates user role for route access
3. Redirects unauthorized users to `/login`

## 📝 Naming Conventions

### Files & Folders

- Use kebab-case for file and folder names: `my-component.tsx`
- Use parentheses for route groups: `(auth)`, `(admin)`
- Use square brackets for dynamic routes: `[id]`

### Components

- Use PascalCase: `UserCard.tsx`, `InvoiceTable.tsx`
- Prefix role-specific components: `AdminDashboard.tsx`

### Types & Interfaces

- Use PascalCase: `User`, `Invoice`, `Order`
- Suffix with suffix: `UserProps`, `InvoiceData`

## 🚀 Getting Started with New Pages

### Adding a New Page

1. Create folder under appropriate route group
2. Add `page.tsx` file
3. Add route to access control matrix in middleware
4. Update navigation menus

### Example: Adding Admin Report Page

```bash
# Create folder
mkdir -p src/app/(admin)/analytics

# Create page
touch src/app/(admin)/analytics/page.tsx
```

## 📚 Resources

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Route Groups Documentation](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
- [Middleware Documentation](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
