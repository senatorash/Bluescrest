import { z } from "zod";
import { sanitizeInput } from "../formValidation";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be less than 100 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, apostrophes, and hyphens"
    )
    .transform(sanitizeInput),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(100, "Email must be less than 255 characters")
    .refine((val) => z.email().safeParse(val).success, {
      message: "Please enter a valid email address",
    })
    .refine(
      (val) => !val.includes("<") && !val.includes(">"),
      "Invalid email format"
    )
    .transform(sanitizeInput),
  phone: z
    .string()
    .max(20, "Phone number is too long")
    .refine(
      (val) => {
        const phoneRegex = /^[0-9+\-\s()]+$/;
        return phoneRegex.test(val);
      },
      {
        message: "Invalid phone number format",
      }
    )
    .transform(sanitizeInput),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must be less than 200 characters")
    .transform(sanitizeInput),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters")
    .transform(sanitizeInput),
});

export type ContactFormData = z.infer<typeof contactSchema>;
