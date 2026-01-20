import { z } from "zod";
import { sanitizeInput } from "@/lib/formValidation";
import { HONEYPOT_FIELD } from "@/lib/formValidation";

// const sanitizedString = z.string().transform((val) => sanitizeInput(val));

export const consultationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name field is required")
    .max(100, "Name must be less than 100 characters")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Name can only contain letters, spaces, apostrophes, and hyphens",
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
      "Invalid email format",
    )
    .transform(sanitizeInput),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .max(15, "Phone number is too long")
    .refine(
      (val) => {
        const phoneRegex = /^[0-9+\-\s()]+$/;
        return phoneRegex.test(val);
      },
      {
        message: "Invalid phone number format",
      },
    )
    .transform(sanitizeInput),
  preferredDate: z
    .string()
    .min(1, "Please select a preferred date")
    .transform(sanitizeInput),
  preferredTime: z
    .string()
    .min(1, "Please select a preferred time")
    .transform(sanitizeInput),
  caseType: z
    .string()
    .min(1, "Please select a case type")
    .transform(sanitizeInput),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters")
    .transform(sanitizeInput),

  organization: z.string().max(0).optional(),
});

export type ConsultationFormData = z.infer<typeof consultationSchema>;
