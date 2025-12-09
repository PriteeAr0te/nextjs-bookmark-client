import z from 'zod';
import { authBaseSchema } from './authBaseSchema';

export const loginSchema = authBaseSchema

export type LoginSchemaType = z.infer<typeof loginSchema>