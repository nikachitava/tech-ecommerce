import { z } from "zod";

export const editProfileFormSchema = z
    .object({
        name: z.string().min(2).max(50),
        lastname: z.string().min(2).max(50),
        email: z
            .string()
            .min(1, { message: "This field has to be filled." })
            .email("This is not a valid email."),
        address: z.string().min(10).max(100),
        old_password: z.string().min(2).max(50),
        new_password: z.string().min(2).max(50),
        confirm_new_password: z
            .string()
            .min(1, { message: "Please confirm your password." }),
    })
    .refine((data) => data.new_password === data.confirm_new_password, {
        message: "Passwords do not match.",
        path: ["confirm_password"],
    });
