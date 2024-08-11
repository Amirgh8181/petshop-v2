"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation';
// react hook form
import { SubmitHandler, useForm } from 'react-hook-form'

// zod
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpDataType } from '@/src/types/AuthInput';

//next-auth
import { signIn } from 'next-auth/react';

//component and styles
import LoadingUi from '../../UI/Loading';
import AuthBtn from '../../UI/Button/AuthFormBtn';
import SignUpInputs from '../../UI/Inputs/SignUpInput';

//icon
import { MdOutlineEmail, MdLockOutline } from 'react-icons/md';
import { FaUser } from "react-icons/fa";

//types
import { AuthInputType } from '@/root/types';
//action
import { signUpUser } from '@/src/actions/SignUp/signUp';
//sweet alert

import { useTranslations } from 'next-intl';
import sweetAl from '@/ui/Swal/swal';
import { SignUpSchema } from '@/src/schema/zodSchema/SignUpSchema';


interface SignUpInputType extends AuthInputType {
    registerVal: "email" | "password" | "name",
}

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
    const searchParams = useSearchParams().get('callbackUrl') ?? "/"
    const t = useTranslations("Auth.SignUp")
    //submit hadler
    const onSubmit: SubmitHandler<SignUpDataType> = async (e) => {
        setIsLoading(true)
        const req = await signUpUser(e as SignUpDataType)
        if (req) {
            const loginReq = await signIn('credentials', {
                email: e.email,
                password: e.password,
                redirect: false,
            })
            if (loginReq?.ok) {
                sweetAl({
                    icon: "success",
                    title: t("successSwal"),
                    timer: 1000,
                });
                setTimeout(() => {
                    router.push(searchParams)
                }, 1000);
            } else {
                sweetAl({
                    icon: "warning",
                    title: t("unsuccessSwal"),
                    timer: 2000,
                });
                setTimeout(() => {
                    router.push(`/Auth/SignIn?callbackUrl=${searchParams}`)
                }, 3000);
            }
        } else {
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

    const inputCreateData: SignUpInputType[] = [
        { key: "UserName", type: "text", icon: <FaUser />, registerVal: "name", err: errors.name?.message },
        { key: "Email", type: "email", icon: <MdOutlineEmail />, registerVal: "email", err: errors.email?.message },
        { key: "Password", type: "password", icon: <MdLockOutline />, registerVal: "password", err: errors.password?.message },
    ] as const

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <LoadingUi isLoading={isLoading} />
            <form className="space-y-8 w-full glass p-4 rounded-box dark:bg-primary bg-primary/20" onSubmit={handleSubmit(onSubmit)}>
                <SignUpInputs inputCreateData={inputCreateData[0]} register={register} />
                <SignUpInputs inputCreateData={inputCreateData[1]} register={register} />
                <SignUpInputs inputCreateData={inputCreateData[2]} register={register} />
                <AuthBtn isLoading={isLoading} />
            </form>

            <div className="divider divider-primary" />
            <div className='mt-4'>
                <span>{t("question")}</span>
                <Link href={`/Auth/SignIn?callbackUrl=${searchParams}`} className="text-blue-600 link mx-2">{t("authType")}</Link>
            </div>
        </div>

    )
}

export default SignUpForm;