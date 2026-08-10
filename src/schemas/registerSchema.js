import { z } from 'zod'

export const registerSchema = z.object({
  nombre: z.string().min(1, 'El nombre es obligatorio'),
  apellido: z.string().min(1, 'El apellido es obligatorio'),
  fechaNacimiento: z
    .string()
    .min(1, 'La fecha de nacimiento es obligatoria')
    .refine((value) => {
      const date = new Date(value)
      if (Number.isNaN(date.getTime())) return false
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return date < today
    }, 'La fecha debe ser anterior a hoy'),
  email: z.string().min(1, 'El email es obligatorio').email('Email inválido'),
  telefono: z
    .string()
    .optional()
    .refine(
      (value) => !value || /^\+?[\d\s-]{7,20}$/.test(value),
      'Teléfono inválido',
    ),
})
