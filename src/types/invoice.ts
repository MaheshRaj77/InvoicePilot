export type InvoiceStatus = 'paid' | 'unpaid' | 'overdue' | 'cancelled';

export interface Invoice {
  id: string;
  orderId: string;
  companyId: string;
  customerId: string;
  invoiceNumber: string;
  gstRate: number;
  subtotal: number;
  gstAmount: number;
  discount: number;
  totalAmount: number;
  status: InvoiceStatus;
  pdfUrl?: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  paidAt?: Date;
  notes?: string;
  createdBy: string;
}
