import z from 'zod';

export const homeValidation = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});

export type HomeScreenValidationType = z.infer<typeof homeValidation>;
