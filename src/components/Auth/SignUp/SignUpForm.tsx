"use client"
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation';
// react hook form
import { SubmitHandler, useForm } from 'react-hook-form'
// zod
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpDataType } from '@/src/types/AuthInput';
import { SignUpSchema } from '@/src/schema/zodSchema/SignUpSchema';
//next-auth
import { signIn } from 'next-auth/react';
//component and styles
import LoadingUi from '../../UI/Loading';
import AuthBtn from '../../UI/Button/AuthFormBtn';
import AuthDivider from '../../UI/AuthDivider';
import AuthInputs from '../../UI/Inputs/Inputs';
//icon
import { MdOutlineEmail, MdLockOutline } from 'react-icons/md';
import { FaUser } from "react-icons/fa";
//types
import { AuthInputType } from '@/root/types';
//action
import { signUpUser } from '@/src/actions/SignUp/signUp';
//sweet alert
import sweetAl from '@/ui/Swal/swal';
//translate
import { useTranslations } from 'next-intl';
//callback store
import { useAuthCallBack } from '@/src/stores/Auth/useAuthCallBack';


const SignUpForm = () => {
    //hook form import 
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<SignUpDataType>({
        resolver: zodResolver(SignUpSchema)
    })
    //state
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const t = useTranslations("Auth.SignUp")
    {/* three line for callback url */ }
    const path = usePathname()
    const { callBackUrl } = useAuthCallBack()
    router.replace(path, undefined);


    //submit hadler
    const onSubmit: SubmitHandler<SignUpDataType> = async (e) => {
        setIsLoading(true)
        const req = await signUpUser(e as SignUpDataType)
        //success signup
        if (req) {
            const loginReq = await signIn('credentials', {
                email: e.email,
                password: e.password,
                redirect: false,
            })
            //success login
            if (loginReq?.ok) {
                sweetAl({
                    icon: "success",
                    title: t("successSwal"),
                    timer: 1000,
                });
                setTimeout(() => {
                    router.push(callBackUrl)
                }, 1000);
            }
            //unsuccess login
            else {
                sweetAl({
                    icon: "warning",
                    title: t("unsuccessSwal"),
                    timer: 2000,
                });
                setTimeout(() => {
                    router.push(`/Auth/SignIn?callbackUrl=${callBackUrl}`)
                }, 3000);
            }
        }
        //unsuccess signup
        else {
            sweetAl({
                icon: "warning",
                title: t("unsuccessSignUpSwal"),
                timer: 2000,
            });
            setTimeout(() => {
                window.location.reload()
            }, 3000);
        }
        setIsLoading(false)
        reset()
    }

    const inputCreateData: AuthInputType[] = [
        { key: "UserName", type: "text", icon: <FaUser />, registerVal: "name", err: errors.name?.message,placeholder:"name" },
        { key: "Email", type: "email", icon: <MdOutlineEmail />, registerVal: "email", err: errors.email?.message,placeholder:"email" },
        { key: "Password", type: "password", icon: <MdLockOutline />, registerVal: "password", err: errors.password?.message },
    ] 


    return (
        <div className="formContainer">
            <LoadingUi isLoading={isLoading} />
            <form className="authForm" onSubmit={handleSubmit(onSubmit)} id='authFaq'>
                <AuthInputs inputCreateData={inputCreateData[0]} register={register} placeholder={inputCreateData[0].placeholder}/>
                <AuthInputs inputCreateData={inputCreateData[1]} register={register} placeholder={inputCreateData[1].placeholder}/>
                <AuthInputs inputCreateData={inputCreateData[2]} register={register} />

                <AuthBtn isLoading={isLoading} />
            </form>

            <AuthDivider
                authType={t("authType")}
                linkHref={`/Auth/SignIn?callbackUrl=${callBackUrl}`}
                question={t("question")} />
        </div>

    )
}

export default SignUpForm;