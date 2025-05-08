import { z } from 'zod';

// Appointment status enum
export enum AppointmentStatus {
  SCHEDULED = 'SCHEDULED',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  NO_SHOW = 'NO_SHOW'
}

// Appointment type enum
export enum AppointmentType {
  REGULAR_CHECKUP = 'REGULAR_CHECKUP',
  FOLLOW_UP = 'FOLLOW_UP',
  CONSULTATION = 'CONSULTATION',
  EMERGENCY = 'EMERGENCY',
  PROCEDURE = 'PROCEDURE',
  VACCINATION = 'VACCINATION'
}

// Appointment schema definition
export const AppointmentSchema = z.object({
  id: z.string().uuid(),
  patientId: z.string().uuid(),
  doctorId: z.string().uuid(),
  type: z.nativeEnum(AppointmentType),
  status: z.nativeEnum(AppointmentStatus).default(AppointmentStatus.SCHEDULED),
  date: z.date(),
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
  reason: z.string(),
  notes: z.string().optional(),
  symptoms: z.array(z.string()).default([]),
  diagnosis: z.string().optional(),
  prescription: z.array(z.object({
    medication: z.string(),
    dosage: z.string(),
    frequency: z.string(),
    duration: z.string(),
    notes: z.string().optional()
  })).optional(),
  followUpRequired: z.boolean().default(false),
  followUpDate: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  cancelledReason: z.string().optional(),
  cancelledBy: z.string().uuid().optional()
});

// Appointment type derived from schema
export type Appointment = z.infer<typeof AppointmentSchema>;

// Create appointment input validation schema
export const CreateAppointmentSchema = AppointmentSchema.omit({
  id: true,
  status: true,
  createdAt: true,
  updatedAt: true,
  diagnosis: true,
  prescription: true,
  followUpRequired: true,
  followUpDate: true,
  cancelledReason: true,
  cancelledBy: true
});

// Update appointment input validation schema
export const UpdateAppointmentSchema = CreateAppointmentSchema.partial();

// Cancel appointment input validation schema
export const CancelAppointmentSchema = z.object({
  reason: z.string(),
  cancelledBy: z.string().uuid()
});