import { z } from 'zod'
import getSignUpUsers from '@/src/lib/getSuccessSignUpUsers/GetSignUpUsers';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
<<<<<<< HEAD
const englishCharRegex: RegExp = /^[A-Za-z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
=======

>>>>>>> f1a60312b8a95f8d771f747d00353e7231015bfb
interface dataProps {
    name: string;
    email: string,
    password: string
}

export const SignUpSchema = z.object({
    name: z
        .string()
<<<<<<< HEAD
        .regex(englishCharRegex, "englishChar")
        .min(1, { message: "nameRequire" })
        .refine(async (e) => {
            const req: dataProps[] = await getSignUpUsers()
=======
        .min(1, { message: 'Name Required' })
        .refine(async (e) => {

            const req: dataProps[] = await getSignUpUsers()

>>>>>>> f1a60312b8a95f8d771f747d00353e7231015bfb
            let isExistName: boolean = true;
            req?.map(item => {
                if (item.name === e) {
                    isExistName = false;
                    return
                }
            })
            return isExistName;
<<<<<<< HEAD
        }, { message: "nameAvailble" }),

    email: z
        .string()
        .regex(englishCharRegex, "englishChar")
        .min(1, { message: "emailRequire" })
        .regex(emailRegex, "emailFormat")
=======
        }, { message: "UserName has been register please login" }),

    email: z
        .string()
        .regex(emailRegex, "invalid email format")
        .min(1, { message: "Email Required" })
>>>>>>> f1a60312b8a95f8d771f747d00353e7231015bfb
        .refine(async (e) => {
            const req: dataProps[] = await getSignUpUsers()
            let isExistEmail: boolean = true;
            req?.map(item => {
                if (item.email === e) {
                    isExistEmail = false;
                    return
                }
            })
            return isExistEmail;
<<<<<<< HEAD
        }, { message: "emailAvailble" }),

    password: z
        .string()
        .regex(englishCharRegex, "englishChar")
        .min(8, "passLength")
        .regex(/[A-Z]/, "passCapital")
        .regex(/[a-z]/, "passSmall")
        .regex(/\d/, "passNumber")
        .regex(/[@$!%*?&#]/, "passSpecial")
=======
        }, { message: "email has been register please login" }),

    password: z
        .string()
        .min(8, { message: "password should 8 character" })
>>>>>>> f1a60312b8a95f8d771f747d00353e7231015bfb
})

