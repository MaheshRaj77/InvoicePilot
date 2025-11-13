import { NextRequest, NextResponse } from 'next/server';
import { registerSchema } from '@/lib/validations';

/**
 * POST /api/auth/register
 * Register a new user with Firebase Authentication
 * 
 * Body: {
 *   name: string,
 *   email: string,
 *   password: string
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request body
    const result = registerSchema.omit({ confirmPassword: true }).safeParse(body);
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

    // TODO: Implement Firebase Admin SDK registration
    // 1. Create user in Firebase Auth using admin SDK
    // 2. Set custom claims for role (default: 'customer')
    // 3. Create user document in Firestore
    // 4. Send welcome email

    // For now, return success simulation
    return NextResponse.json(
      {
        message: 'Registration successful',
        user: {
          id: 'user-' + Date.now(),
          name: body.name,
          email: body.email,
          role: 'customer',
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Registration failed. Please try again.' },
      { status: 500 }
    );
  }
}
