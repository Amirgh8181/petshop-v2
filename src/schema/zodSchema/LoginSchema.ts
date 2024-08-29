import { z } from 'zod'

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
})

