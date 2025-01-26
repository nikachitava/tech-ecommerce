import { z } from "zod";

export const billingSchema = z
    .object({
        fullname: z.string().min(2).max(50),
        email: z
            .string()
            .min(1, { message: "This field has to be filled." })
            .email("This is not a valid email."),
        address: z.string().min(10).max(100),
        additional: z.string().min(10).max(100),
        city: z.string().min(2).max(50),
        phone: z.string().min(2).max(50),
        payment_method: z.object({
            bank: z.boolean(),
            cash: z.boolean(),
          })
            .refine((data) => data.bank !== data.cash, {
              message: "You must select either 'Bank' or 'Cash on delivery', not both",
              path: ["payment_method"],
            }),
    })
    