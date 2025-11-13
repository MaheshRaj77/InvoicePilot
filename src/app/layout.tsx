import type { Metadata } from 'next';
import './globals.css'; 

export const metadata: Metadata = {
  title: 'InvoicePilot - Professional Invoice Management',
  description: 'Manage invoices, customers, and orders with ease',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
