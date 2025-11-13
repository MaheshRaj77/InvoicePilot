import PDFDocument from 'pdfkit';
import { Invoice } from '@/types/invoice';
import { Customer } from '@/types/customer';
import { Company } from '@/types/company';
import { formatCurrency, formatDate } from '@/lib/utils';

interface InvoiceData {
  invoice: Invoice;
  customer: Customer;
  company: Company;
  items: Array<{ name: string; quantity: number; price: number; amount: number }>;
}

/**
 * Generate PDF buffer for invoice
 */
export const generateInvoicePDF = (data: InvoiceData): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    try {
      const { invoice, customer, company, items } = data;
      const doc = new PDFDocument();
      const buffers: Buffer[] = [];

      // Collect PDF data
      doc.on('data', (chunk: Buffer) => buffers.push(chunk));
      doc.on('end', () => {
        resolve(Buffer.concat(buffers));
      });

      // Header
      doc
        .font('Helvetica-Bold')
        .fontSize(24)
        .text('INVOICE', 50, 50);

      // Company Info
      doc
        .font('Helvetica')
        .fontSize(10)
        .text(`${company.name}`, 50, 100)
        .text(`${company.address}`, 50, 120)
        .text(`Email: ${company.contactEmail}`, 50, 140)
        .text(`Phone: ${company.contactPhone || 'N/A'}`, 50, 160)
        .text(`GST Number: ${company.gstNumber}`, 50, 180);

      // Invoice Details
      const rightX = 350;
      doc
        .fontSize(10)
        .text(`Invoice Number: ${invoice.invoiceNumber}`, rightX, 100)
        .text(`Invoice Date: ${formatDate(invoice.createdAt)}`, rightX, 120)
        .text(`Due Date: ${invoice.dueDate ? formatDate(invoice.dueDate) : 'N/A'}`, rightX, 140)
        .text(`Status: ${invoice.status.toUpperCase()}`, rightX, 160);

      // Bill To
      doc
        .font('Helvetica-Bold')
        .fontSize(12)
        .text('Bill To:', 50, 220);

      doc
        .font('Helvetica')
        .fontSize(10)
        .text(customer.name, 50, 240)
        .text(customer.address, 50, 260)
        .text(`Email: ${customer.email}`, 50, 280)
        .text(`Phone: ${customer.phone}`, 50, 300);

      if (customer.gstNumber) {
        doc.text(`GST Number: ${customer.gstNumber}`, 50, 320);
      }

      // Items Table
      const tableTop = customer.gstNumber ? 360 : 340;
      const itemHeight = 25;
      const pageHeight = doc.page.height;
      const pageBottom = pageHeight - 100;

      // Table Header
      doc
        .font('Helvetica-Bold')
        .fontSize(10)
        .text('Description', 50, tableTop)
        .text('Qty', 280, tableTop)
        .text('Rate', 330, tableTop)
        .text('Amount', 420, tableTop);

      // Horizontal line
      doc
        .moveTo(50, tableTop + 15)
        .lineTo(550, tableTop + 15)
        .stroke();

      // Items
      let currentY = tableTop + 30;

      for (const item of items) {
        if (currentY > pageBottom) {
          doc.addPage();
          currentY = 50;
        }

        doc
          .font('Helvetica')
          .fontSize(10)
          .text(item.name, 50, currentY)
          .text(item.quantity.toString(), 280, currentY, { align: 'right', width: 40 })
          .text(formatCurrency(item.price), 330, currentY, { align: 'right', width: 80 })
          .text(formatCurrency(item.amount), 420, currentY, { align: 'right', width: 80 });

        currentY += itemHeight;
      }

      // Totals section
      currentY += 10;

      doc
        .moveTo(50, currentY)
        .lineTo(550, currentY)
        .stroke();

      currentY += 15;

      // Subtotal
      doc
        .font('Helvetica')
        .fontSize(10)
        .text('Subtotal:', 380, currentY, { align: 'right', width: 60 })
        .text(formatCurrency(invoice.subtotal), 420, currentY, { align: 'right', width: 80 });

      currentY += 20;

      // Discount
      if (invoice.discount > 0) {
        doc
          .text('Discount:', 380, currentY, { align: 'right', width: 60 })
          .text(formatCurrency(invoice.discount), 420, currentY, { align: 'right', width: 80 });
        currentY += 20;
      }

      // GST
      doc
        .text(`GST (${invoice.gstRate}%):`, 380, currentY, { align: 'right', width: 60 })
        .text(formatCurrency(invoice.gstAmount), 420, currentY, { align: 'right', width: 80 });

      currentY += 20;

      // Total
      doc
        .font('Helvetica-Bold')
        .fontSize(12)
        .text('Total Amount Due:', 380, currentY, { align: 'right', width: 60 })
        .text(formatCurrency(invoice.totalAmount), 420, currentY, { align: 'right', width: 80 });

      // Notes
      if (invoice.notes) {
        currentY += 40;
        doc
          .font('Helvetica-Bold')
          .fontSize(10)
          .text('Notes:', 50, currentY);

        currentY += 20;
        doc
          .font('Helvetica')
          .fontSize(9)
          .text(invoice.notes, 50, currentY, { width: 500, height: 60 });
      }

      // Footer
      doc
        .font('Helvetica')
        .fontSize(8)
        .text(
          'This is a computer-generated invoice. No signature required.',
          50,
          pageHeight - 40,
          { width: 500, align: 'center' }
        );

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Generate sample invoice data for testing
 */
export const generateSampleInvoiceData = (): InvoiceData => {
  const invoice: Invoice = {
    id: 'inv-001',
    invoiceNumber: 'INV-2024-001',
    orderId: 'ord-001',
    companyId: 'comp-001',
    customerId: 'cust-001',
    gstRate: 18,
    subtotal: 10000,
    gstAmount: 1800,
    discount: 500,
    totalAmount: 11300,
    status: 'unpaid',
    createdAt: new Date(),
    updatedAt: new Date(),
    createdBy: 'admin-001',
  };

  const customer: Customer = {
    id: 'cust-001',
    companyId: 'comp-001',
    name: 'John Doe',
    email: 'john@example.com',
    phone: '9876543210',
    address: '123 Main Street, New York, NY 10001',
    gstNumber: '27AAPPU1111H1A0',
    createdAt: new Date(),
    isActive: true,
  };

  const company: Company = {
    id: 'comp-001',
    name: 'Sample Company',
    gstNumber: '18AABCU9011R1Z5',
    address: '456 Business Ave, Mumbai, MH 400001',
    contactEmail: 'contact@company.com',
    contactPhone: '9876543210',
    createdBy: 'admin-001',
    createdAt: new Date(),
    isActive: true,
  };

  const items = [
    { name: 'Product A', quantity: 2, price: 2500, amount: 5000 },
    { name: 'Product B', quantity: 1, price: 5000, amount: 5000 },
  ];

  return { invoice, customer, company, items };
};
