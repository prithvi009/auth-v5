import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Invalid email address',
    }),
    password: z.string().min(1, 'Password is required'),
});

export const RegisterSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email({
        message: 'email address required',
    }),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});