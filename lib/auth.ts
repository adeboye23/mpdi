import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


const JWT_SECRET = process.env.JWT_SECRET || 'mpdi-super-secret-key-for-production-use-minimum-32-characters-long'

export interface JWTPayload {
  userId: number
  email: string
  role: string
}

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10)
}

export function verifyPassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash)
}

export function generateToken(payload: JWTPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload
    console.log('🔍 Token decoded successfully:', decoded.email)
    return decoded
  } catch (error) {
    console.error('❌ Token verification failed:', error)
    return null
  }
}