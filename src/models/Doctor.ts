import { z } from 'zod';
import { UserSchema } from './User';

// Specialization enum
export enum MedicalSpecialization {
  CARDIOLOGY = 'CARDIOLOGY',
  DERMATOLOGY = 'DERMATOLOGY',
  ENDOCRINOLOGY = 'ENDOCRINOLOGY',
  GASTROENTEROLOGY = 'GASTROENTEROLOGY',
  NEUROLOGY = 'NEUROLOGY',
  OBSTETRICS = 'OBSTETRICS',
  ONCOLOGY = 'ONCOLOGY',
  PEDIATRICS = 'PEDIATRICS',
  PSYCHIATRY = 'PSYCHIATRY',
  SURGERY = 'SURGERY',
  GENERAL_PRACTICE = 'GENERAL_PRACTICE'
}

// Doctor schema definition
export const DoctorSchema = UserSchema.extend({
  licenseNumber: z.string(),
  specialization: z.nativeEnum(MedicalSpecialization),
  qualifications: z.array(z.object({
    degree: z.string(),
    institution: z.string(),
    year: z.number().int().min(1900).max(new Date().getFullYear()),
    additionalInfo: z.string().optional()
  })),
  experience: z.number().int().min(0),
  availability: z.array(z.object({
    day: z.enum(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']),
    startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
    endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
  })).default([]),
  department: z.string(),
  consultationFee: z.number().positive(),
  rating: z.number().min(0).max(5).optional(),
  patientCount: z.number().int().min(0).default(0),
  currentPatients: z.array(z.string()).default([]) // Array of patient IDs
});

// Doctor type derived from schema
export type Doctor = z.infer<typeof DoctorSchema>;

// Create doctor input validation schema
export const CreateDoctorSchema = DoctorSchema.omit({
  id: true,
  role: true,
  createdAt: true,
  updatedAt: true,
  lastLogin: true,
  rating: true,
  patientCount: true,
  currentPatients: true
});

// Update doctor input validation schema
export const UpdateDoctorSchema = CreateDoctorSchema.partial();