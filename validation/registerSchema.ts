import { z } from 'zod';
import { authBaseSchema } from './authBaseSchema';

export const registerSchema = authBaseSchema.extend({
    firstName: z
        .string()
        .trim()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name is too long"),

    lastName: z
        .string()
        .trim()
        .min(2, "Last name must be at least 2 characters")
        .max(50, "Last name is too long"),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>