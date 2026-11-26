import { NextRequest, NextResponse } from 'next/server';
import { checkAdminCredentials, signAdminToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ success: false, error: 'Username and password are required' }, { status: 400 });
    }

    const isValid = checkAdminCredentials(username, password);
    if (!isValid) {
      return NextResponse.json({ success: false, error: 'Invalid administrator credentials' }, { status: 401 });
    }

    const token = signAdminToken(username);

    const response = NextResponse.json({
      success: true,
      message: 'Authentication successful',
      user: { username, role: 'superadmin' }
    });

    // Set secure HTTP-only cookie
    response.cookies.set('novaspark_admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 days
    });

    return response;
  } catch (error) {
    console.error('Admin login error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
