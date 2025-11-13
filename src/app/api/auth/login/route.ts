import { NextRequest, NextResponse } from 'next/server';
import { loginSchema } from '@/lib/validations';

/**
 * POST /api/auth/login
 * Authenticate user with Firebase
 * 
 * Body: {
 *   email: string,
 *   password: string
 * }
 * 
 * Response: {
 *   message: string,
 *   user: { id, email, name, role },
 *   token: string (JWT)
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const result = loginSchema.safeParse(body);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const err of result.error.issues) {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      }
      return NextResponse.json(
        { message: 'Validation failed', errors: fieldErrors },
        { status: 400 }
      );
    }

    // Authenticate with Firebase Admin SDK
    // 1. Use admin SDK to verify email and password
    // 2. Generate custom token with role and companyId claims
    // 3. Return user data and token

    // For now, return success simulation
    return NextResponse.json(
      {
        message: 'Login successful',
        user: {
          id: 'user-' + Date.now(),
          email: body.email,
          name: 'Test User',
          role: 'customer',
        },
        token: 'mock-jwt-token-' + Date.now(),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Login failed. Please try again.' },
      { status: 500 }
    );
  }
}
