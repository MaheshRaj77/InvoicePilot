// App Configuration
export const APP_NAME = 'InvoicePilot';
export const APP_DESCRIPTION = 'Professional Sales Invoice Management System';
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

// User Roles
export const USER_ROLES = {
  SUPERADMIN: 'superadmin',
  ADMIN: 'admin',
  STAFF: 'staff',
  CUSTOMER: 'customer',
} as const;

// Order Status
export const ORDER_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  CANCELLED: 'cancelled',
} as const;

// Invoice Status
export const INVOICE_STATUS = {
  PAID: 'paid',
  UNPAID: 'unpaid',
  OVERDUE: 'overdue',
  CANCELLED: 'cancelled',
} as const;

// Tax Rates (Default GST rates for India)
export const GST_RATES = {
  ZERO: 0,
  FIVE: 5,
  TWELVE: 12,
  EIGHTEEN: 18,
  TWENTY_EIGHT: 28,
} as const;

// Common discount types
export const DISCOUNT_TYPES = {
  PERCENTAGE: 'percentage',
  FIXED: 'fixed',
} as const;

// Pagination
export const ITEMS_PER_PAGE = 10;
export const MAX_ITEMS_PER_PAGE = 100;

// Firebase Collections
export const COLLECTIONS = {
  USERS: 'users',
  COMPANIES: 'companies',
  CUSTOMERS: 'customers',
  ORDERS: 'orders',
  INVOICES: 'invoices',
  REPORTS: 'reports',
} as const;

// Date Formats
export const DATE_FORMAT = 'yyyy-MM-dd';
export const DATETIME_FORMAT = 'yyyy-MM-dd HH:mm:ss';
export const DISPLAY_DATE_FORMAT = 'MMM dd, yyyy';
export const DISPLAY_DATETIME_FORMAT = 'MMM dd, yyyy hh:mm a';

// Email Templates
export const EMAIL_TEMPLATES = {
  WELCOME: 'welcome',
  INVOICE: 'invoice',
  INVOICE_REMINDER: 'invoice_reminder',
  RESET_PASSWORD: 'reset_password',
  CONTACT_CONFIRMATION: 'contact_confirmation',
} as const;

// File Upload
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png'];

// Currency
export const CURRENCY = 'INR';
export const CURRENCY_SYMBOL = '₹';
