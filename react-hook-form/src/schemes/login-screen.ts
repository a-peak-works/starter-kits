import z from 'zod';

export const loginValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
});

export type LoginScreenValidationType = z.infer<typeof loginValidation>;
