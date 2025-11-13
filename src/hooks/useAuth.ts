'use client';

import { useEffect, useState } from 'react';

interface User {
  uid: string;
  email: string;
  role: string;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Implementation: Setup Firebase Auth listener
    const unsubscribe = () => {
      setLoading(false);
    };

    return unsubscribe;
  }, []);

  return { user, loading };
}
