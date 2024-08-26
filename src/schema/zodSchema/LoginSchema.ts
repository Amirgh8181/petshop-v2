import { z } from 'zod'

<<<<<<< HEAD
const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const englishCharRegex: RegExp = /^[A-Za-z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
export const LoginSchema = z.object({
    email: z
        .string()
        .regex(englishCharRegex, "englishChar")
        .min(1, { message: "emailRequire" })
        .regex(emailRegex, "emailFormat"),

    password: z
        .string()
        .regex(englishCharRegex, "englishChar")
        .min(8, "passLength")
        .regex(/[A-Z]/, "passCapital")
        .regex(/[a-z]/, "passSmall")
        .regex(/\d/, "passNumber")
        .regex(/[@$!%*?&#]/, "passSpecial")
=======
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const LoginSchema = z.object({
    email: z
        .string()
        .regex(emailRegex,"invalid email format")
        .min(1, { message: "Email Required" }),

    password: z
        .string()
        .min(8, { message: "password should 8 character" })
>>>>>>> f1a60312b8a95f8d771f747d00353e7231015bfb
})

