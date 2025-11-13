import { DateTime } from 'luxon';

/**
 * Format date for display
 */
export const formatDate = (date: Date | string): string => {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return DateTime.fromJSDate(date).toFormat('MMM dd, yyyy');
};

/**
 * Format date and time for display
 */
export const formatDateTime = (date: Date | string): string => {
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return DateTime.fromJSDate(date).toFormat('MMM dd, yyyy hh:mm a');
};

/**
 * Format currency
 */
export const formatCurrency = (
  amount: number,
  symbol: string = '₹'
): string => {
  return `${symbol}${amount.toFixed(2).replaceAll(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

/**
 * Calculate percentage
 */
export const calculatePercentage = (value: number, percentage: number): number => {
  return (value * percentage) / 100;
};

/**
 * Calculate discount
 */
export const calculateDiscount = (
  amount: number,
  discount: number,
  isPercentage: boolean = false
): number => {
  if (isPercentage) {
    return calculatePercentage(amount, discount);
  }
  return Math.min(discount, amount);
};

/**
 * Calculate GST
 */
export const calculateGST = (amount: number, gstRate: number): number => {
  return (amount * gstRate) / 100;
};

/**
 * Calculate total with GST and discount
 */
export const calculateInvoiceTotal = (
  subtotal: number,
  gstRate: number,
  discount: number
): {
  discountAmount: number;
  subtotalAfterDiscount: number;
  gstAmount: number;
  totalAmount: number;
} => {
  const discountAmount = calculateDiscount(subtotal, discount);
  const subtotalAfterDiscount = subtotal - discountAmount;
  const gstAmount = calculateGST(subtotalAfterDiscount, gstRate);
  const totalAmount = subtotalAfterDiscount + gstAmount;

  return {
    discountAmount,
    subtotalAfterDiscount,
    gstAmount,
    totalAmount,
  };
};

/**
 * Generate invoice number
 */
export const generateInvoiceNumber = (
  companyId: string,
  timestamp: Date = new Date()
): string => {
  const date = DateTime.fromJSDate(timestamp);
  const dateStr = date.toFormat('yyyyMMdd');
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `INV-${companyId.substring(0, 3).toUpperCase()}-${dateStr}-${random}`;
};

/**
 * Generate order ID
 */
export const generateOrderId = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `ORD-${timestamp}-${random}`;
};

/**
 * Generate customer ID
 */
export const generateCustomerId = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 5).toUpperCase();
  return `CUST-${timestamp}-${random}`;
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Indian format)
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone.replaceAll(/\D/g, ''));
};

/**
 * Validate GST number (Indian format)
 */
export const isValidGSTNumber = (gst: string): boolean => {
  const gstRegex = /^\d{2}[A-Z]{5}\d{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/;
  return gstRegex.test(gst);
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Format file size
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

/**
 * Delay execution (useful for debouncing)
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Check if date is overdue
 */
export const isOverdue = (dueDate: Date | string): boolean => {
  const due = typeof dueDate === 'string' ? new Date(dueDate) : dueDate;
  return due < new Date();
};

/**
 * Calculate days remaining
 */
export const daysRemaining = (dueDate: Date | string): number => {
  const due = typeof dueDate === 'string' ? new Date(dueDate) : dueDate;
  const today = new Date();
  const diffTime = due.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Capitalize string
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Format user role for display
 */
export const formatUserRole = (role: string): string => {
  const roleMap: Record<string, string> = {
    superadmin: 'Super Administrator',
    admin: 'Administrator',
    staff: 'Staff',
    customer: 'Customer',
  };
  return roleMap[role] || role;
};
