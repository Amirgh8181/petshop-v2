"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation';
// react-hook-form
import { SubmitHandler, useForm } from 'react-hook-form'
// zod
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/src/schema/zodSchema/LoginSchema';
import { LoginDataType } from '@/src/types/AuthInput';
//component and styles
import styles from '../authstyle.module.css'
//icons
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
//sweet alert
import sweetAl from '@/src/actions/swal';
//type
import { AuthInputType } from '@/root/types';
//action
import LoadingUi from '../../UI/Loading';
import { signIn } from 'next-auth/react';
import AuthBtn from '../../UI/Button/AuthBtn';
import SignInInputs from '../../UI/Inputs/SignInInputs';


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
    const searchParams = useSearchParams().get('callbackUrl') ?? "/"


    //submit hadler
    const onSubmit: SubmitHandler<LoginDataType> = async (e) => {
        console.log(e.email);
        console.log(e.password);

        setIsLoading(true)
        //next auth
        const req = await signIn('credentials', {
            email: e.email,
            password: e.password,
            redirect: false,
        })

        console.log(req);

        if (req?.ok) {
            sweetAl({
                icon: "success",
                title: 'successfull login',
                timer: 2000,
            })
            setTimeout(() => {
                router.push(searchParams as string)
            }, 3000);
        }

        else {
            sweetAl({
                icon: "warning",
                title: 'unsuccessfull login',
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
        <div className="w-full flex flex-col justify-center items-center">
            <LoadingUi isLoading={isLoading} />
            <form className="space-y-8 w-full glass p-4 rounded-box dark:bg-primary bg-primary/20" onSubmit={handleSubmit(onSubmit)}>
                <SignInInputs inputCreateData={inputCreateData[0]} register={register} />
                <SignInInputs inputCreateData={inputCreateData[1]} register={register} />
                <AuthBtn isLoading={isLoading} />
            </form>

            <div className="divider divider-primary" />
            <div className='mt-4'>
                <span>you dont have existing account? </span>
                <Link href={`/Auth/SignUp?callbackUrl=${searchParams}`} className={styles.authLink}>SignUp</Link>
            </div>


        </div>
    )
}

export default LoginForm;
