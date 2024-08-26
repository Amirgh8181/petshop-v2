"use client"

import { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
// react-hook-form
import { SubmitHandler, useForm } from 'react-hook-form'
// zod
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginDataType } from '@/src/types/AuthInput';
import { LoginSchema } from '@/src/schema/zodSchema/LoginSchema';
//icons
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
//sweet alert
import sweetAl from '@/ui/Swal/swal';
//type
import { AuthInputType } from '@/root/types';
//component
import LoadingUi from '../../UI/Loading';
import AuthBtn from '../../UI/Button/AuthFormBtn';
import SignInInputs from '../../UI/Inputs/SignInInputs';
import AuthDivider from '../../UI/AuthDivider';
//next-auth
import { signIn } from 'next-auth/react';
//translate
import { useTranslations } from 'next-intl';
//callback store
import { useAuthCallBack } from '@/src/stores/Auth/useAuthCallBack';


interface LoginInputType extends AuthInputType {
    registerVal: "email" | "password",
}



const LoginForm = () => {
    //hook form initialize 
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<LoginDataType>({
        resolver: zodResolver(LoginSchema)
    })
    //state
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const t = useTranslations("Auth.SignIn")

    {/* because faq link in not correct working with callBackUrl cut this from url and save this in 
        zustand store and show just pathname in url*/}
    const path = usePathname()
    const { callBackUrl, setCallBackUrl } = useAuthCallBack()
    const search = useRef(useSearchParams().get('callbackUrl') ?? "/")
    router.replace(path, undefined);

    useEffect(() => {
        checkCallbackUrl()
    }, [search])

    const checkCallbackUrl = () => {
        if (search.current !== callBackUrl && search.current !== "/") {
            setCallBackUrl(search.current)
        }
    }

    //submit hadler
    const onSubmit: SubmitHandler<LoginDataType> = async (e) => {
        setIsLoading(true)
        //next auth
        const req = await signIn('credentials', {
            email: e.email,
            password: e.password,
            redirect: false,
        })
        //success login
        if (req?.ok) {
            sweetAl({
                icon: "success",
                title: t("successSwal"),
                timer: 2000,
            })
            setTimeout(() => {
                router.push(callBackUrl)
            }, 3000);
        }
        //unsuccess login
        else {
            sweetAl({
                icon: "warning",
                title: t("unsuccessSwal"),
                timer: 2000,
            });
            setTimeout(() => {
                window.location.reload()
            }, 3000);
        }
        setIsLoading(false)
        reset()
    }

    const inputCreateData: LoginInputType[] = [
        { key: "Email", type: "email", icon: <MdOutlineEmail />, registerVal: "email", err: errors.email?.message },
        { key: "Password", type: "password", icon: <MdLockOutline />, registerVal: "password", err: errors.password?.message }
    ]


    return (
        <div className="formContainer">
            <LoadingUi isLoading={isLoading} />
            <form className="authForm origin-top" onSubmit={handleSubmit(onSubmit)}>
                <SignInInputs inputCreateData={inputCreateData[0]} register={register} />
                <SignInInputs inputCreateData={inputCreateData[1]} register={register} />
                <AuthBtn isLoading={isLoading} />
            </form>

            <AuthDivider
                authType={t("authType")}
                linkHref={`/Auth/SignUp?callbackUrl=${callBackUrl}`}
                question={t("question")}
            />

        </div>
    )
}

export default LoginForm;
