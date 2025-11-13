import { User, UserRole } from '@/types/user';

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (user: User | null): user is User => {
  return !!user;
};

/**
 * Check if user has a specific role
 */
export const hasRole = (user: User | null, role: UserRole): boolean => {
  return user?.role === role;
};

/**
 * Check if user has any of the specified roles
 */
export const hasAnyRole = (user: User | null, roles: UserRole[]): boolean => {
  return user ? roles.includes(user.role) : false;
};

/**
 * Check if user is super admin
 */
export const isSuperAdmin = (user: User | null): boolean => {
  return hasRole(user, 'superadmin');
};

/**
 * Check if user is company admin
 */
export const isCompanyAdmin = (user: User | null): boolean => {
  return hasRole(user, 'admin');
};

/**
 * Check if user is staff/salesperson
 */
export const isStaff = (user: User | null): boolean => {
  return hasRole(user, 'staff');
};

/**
 * Check if user is customer
 */
export const isCustomer = (user: User | null): boolean => {
  return hasRole(user, 'customer');
};

/**
 * Check if user has access to company data
 */
export const hasCompanyAccess = (
  user: User | null,
  companyId: string
): boolean => {
  if (!user) return false;
  if (isSuperAdmin(user)) return true;
  return user.companyId === companyId;
};

/**
 * Check if user can manage company
 */
export const canManageCompany = (
  user: User | null,
  companyId?: string
): boolean => {
  if (!user) return false;
  if (isSuperAdmin(user)) return true;
  if (isCompanyAdmin(user) && companyId) {
    return user.companyId === companyId;
  }
  return false;
};

/**
 * Get user display name or fallback
 */
export const getUserDisplayName = (user: User | null): string => {
  return user?.name || user?.email || 'User';
};

/**
 * Format user role for display
 */
export const formatRole = (role: UserRole): string => {
  const roleMap: Record<UserRole, string> = {
    superadmin: 'Super Administrator',
    admin: 'Company Administrator',
    staff: 'Staff / Salesperson',
    customer: 'Customer',
  };
  return roleMap[role];
};
