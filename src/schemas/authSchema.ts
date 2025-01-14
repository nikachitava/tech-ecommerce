import { z } from "zod";

export const authSchema = z
	.object({
		email: z
			.string()
			.min(1, { message: "This field has to be filled." })
			.email("This is not a valid email."),
		password: z.string().min(6).max(50),
	});


export const signUpSchema = z
    .object({
        name: z.string().min(1, {message: "This field is required"}),
        lastname: z.string().min(1, {message: "This field is required"}),
        email: z
            .string()
            .min(1, { message: "This field has to be filled." })
            .email("This is not a valid email."),
        password: z.string().min(2).max(50),
        confirm_password: z
            .string()
            .min(1, { message: "Please confirm your password." }),
    })
    .refine((data) => data.password === data.confirm_password, {
        message: "Passwords do not match.",
        path: ["confirm_password"],
    });
    
