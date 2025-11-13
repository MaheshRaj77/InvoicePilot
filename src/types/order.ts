export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  description?: string;
}

export type OrderStatus = 'pending' | 'approved' | 'cancelled';

export interface Order {
  id: string;
  customerId: string;
  companyId: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  approvedBy?: string;
  approvedAt?: Date;
}
