import { z } from 'zod'

export const sendMailSchema = z.object({
    name: z.string().min(2).max(50),
    email: z
        .string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    phone: z.string().min(2).max(50),
    message: z.string().min(2).max(500),
});