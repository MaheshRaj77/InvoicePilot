'use client';

import { ReactNode } from 'react';

interface ProtectedRouteProps {
  readonly children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  // Implementation: Check user role and render children or redirect
  return <>{children}</>;
}
