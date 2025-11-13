export interface Company {
  id: string;
  name: string;
  gstNumber: string;
  address: string;
  contactEmail: string;
  contactPhone?: string;
  createdBy: string;
  createdAt: Date;
  isActive: boolean;
  logo?: string;
  website?: string;
}
