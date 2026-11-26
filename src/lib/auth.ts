import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'novaspark_super_secret_jwt_key_2026_growth_agency';
const COOKIE_NAME = 'novaspark_admin_token';

export interface AdminSession {
  username: string;
  role: 'superadmin' | 'admin';
  iat?: number;
  exp?: number;
}

export function signAdminToken(username: string): string {
  return jwt.sign(
    { username, role: 'superadmin' },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

export function verifyAdminToken(token: string): AdminSession | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as AdminSession;
    return decoded;
  } catch {
    return null;
  }
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyAdminToken(token);
}

export function checkAdminCredentials(username: string, pass: string): boolean {
  const configuredUser = process.env.ADMIN_USERNAME || 'admin@novaspark.in';
  const configuredPass = process.env.ADMIN_PASSWORD_HASH || 'NovaSpark@2026!';

  // Standard case-insensitive username check and exact password check
  return username.trim().toLowerCase() === configuredUser.toLowerCase() && pass === configuredPass;
}
