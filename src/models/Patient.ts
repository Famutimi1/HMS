import { z } from 'zod';
import { UserSchema } from './User';

// Blood type enum
export enum BloodType {
  A_POSITIVE = 'A+',
  A_NEGATIVE = 'A-',
  B_POSITIVE = 'B+',
  B_NEGATIVE = 'B-',
  O_POSITIVE = 'O+',
  O_NEGATIVE = 'O-',
  AB_POSITIVE = 'AB+',
  AB_NEGATIVE = 'AB-'
}

// Patient schema definition
export const PatientSchema = UserSchema.extend({
  medicalRecordNumber: z.string(),
  bloodType: z.nativeEnum(BloodType),
  allergies: z.array(z.string()).default([]),
  chronicConditions: z.array(z.string()).default([]),
  emergencyContact: z.object({
    name: z.string(),
    relationship: z.string(),
    phoneNumber: z.string(),
    address: z.string().optional()
  }),
  insuranceInfo: z.object({
    provider: z.string(),
    policyNumber: z.string(),
    groupNumber: z.string().optional(),
    expirationDate: z.date().optional()
  }).optional(),
  lastVisit: z.date().optional(),
  upcomingAppointments: z.array(z.string()).default([]) // Array of appointment IDs
});

// Patient type derived from schema
export type Patient = z.infer<typeof PatientSchema>;

// Create patient input validation schema
export const CreatePatientSchema = PatientSchema.omit({
  id: true,
  role: true,
  createdAt: true,
  updatedAt: true,
  lastLogin: true,
  upcomingAppointments: true
});

// Update patient input validation schema
export const UpdatePatientSchema = CreatePatientSchema.partial();