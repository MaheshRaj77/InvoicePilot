export type UserRole = 'superadmin' | 'admin' | 'staff' | 'customer';

export interface User {
  uid: string;
  name: string;
  email: string;
  role: UserRole;
  companyId?: string;
  createdAt: Date;
  isActive: boolean;
  photoURL?: string;
  phone?: string;
}

export interface AuthUser extends User {
  customClaims?: {
    role: UserRole;
    companyId?: string;
  };
}
