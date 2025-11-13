'use client';

import { useAuth } from './useAuth';

export function useUserRole() {
  const { user } = useAuth();

  const isSuperAdmin = user?.role === 'superadmin';
  const isAdmin = user?.role === 'admin';
  const isStaff = user?.role === 'staff';
  const isCustomer = user?.role === 'customer';

  return { user, isSuperAdmin, isAdmin, isStaff, isCustomer };
}
