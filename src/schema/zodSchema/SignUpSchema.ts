import { z } from 'zod'
import getSignUpUsers from '@/src/lib/getSuccessSignUpUsers/GetSignUpUsers';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const englishCharRegex: RegExp = /^[A-Za-z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/

interface dataProps {
    name: string;
    email: string,
    password: string
}

export const SignUpSchema = z.object({
    name: z
        .string()
        .regex(englishCharRegex, "englishChar")
        .min(1, { message: "nameRequire" })
        .refine(async (e) => {
            const req: dataProps[] = await getSignUpUsers()
            let isExistName: boolean = true;
            req?.map(item => {
                if (item.name === e) {
                    isExistName = false;
                    return
                }
            })
            return isExistName;
        }, { message: "nameAvailble" }),
    email: z
        .string()
        .regex(englishCharRegex, "englishChar")
        .min(1, { message: "emailRequire" })
        .regex(emailRegex, "emailFormat")

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
        }, { message: "emailAvailble" }),

    password: z
        .string()
        .regex(englishCharRegex, "englishChar")
        .min(8, "passLength")
        .regex(/[A-Z]/, "passCapital")
        .regex(/[a-z]/, "passSmall")
        .regex(/\d/, "passNumber")
        .regex(/[@$!%*?&#]/, "passSpecial")

})

