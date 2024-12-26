import {z} from 'zod';

export const loginValidationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, {
        message:"password must be at least 6 characters"
    })
});

export type LoginValidationSchema = z.infer<typeof loginValidationSchema>