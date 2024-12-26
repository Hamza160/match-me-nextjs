import {z} from 'zod';

export const registerValidationSchema = z.object({
    name: z.string().min(3, {
        message:"name must be at least 3 characters"
    }),
    email: z.string().email(),
    password: z.string().min(6, {
        message:"password must be at least 6 characters"
    })
});

export type RegisterValidationSchema = z.infer<typeof registerValidationSchema>