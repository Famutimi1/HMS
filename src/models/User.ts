import { z } from 'zod';

// User roles enum
export enum UserRole {
  ADMIN = 'ADMIN',
  DOCTOR = 'DOCTOR',
  NURSE = 'NURSE',
  PATIENT = 'PATIENT',
  STAFF = 'STAFF'
}

// User schema definition
export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  role: z.nativeEnum(UserRole),
  phoneNumber: z.string().optional(),
  address: z.string().optional(),
  dateOfBirth: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  isActive: z.boolean().default(true),
  lastLogin: z.date().optional()
});

// User type derived from schema
export type User = z.infer<typeof UserSchema>;

// Create user input validation schema
export const CreateUserSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  lastLogin: true
});

// Update user input validation schema
export const UpdateUserSchema = CreateUserSchema.partial();

// User login input validation schema
export const UserLoginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});