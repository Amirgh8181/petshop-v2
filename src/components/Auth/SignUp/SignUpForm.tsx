"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
// react hook form
import { SubmitHandler, useForm } from 'react-hook-form'

// zod
import { zodResolver } from '@hookform/resolvers/zod';
import { SignUpSchema } from '@/src/schema/zodSchema/SignUpSchema';
import { SignUpDataType } from '@/src/types/AuthInput';

//next-auth
import { signIn } from 'next-auth/react';

//component and styles
import { signUpUser } from '@/src/lib/signUp';
import styles from '../authstyle.module.css'
import InputErr from '../../UI/Inputs/InputErr';
import InputLabel from '../../UI/Inputs/InputLabel';


//sweet alert
import swal from 'sweetalert';


//icon
import { MdOutlineEmail, MdLockOutline } from 'react-icons/md';
import { FaUser } from "react-icons/fa";

//types
import { AuthInputType } from '@/root/types';


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
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    //submit hadler
    const onSubmit: SubmitHandler<SignUpDataType> = async (e) => {
        setLoading(true)
        const req = await signUpUser(e as SignUpDataType)
        if (req) {
            const loginReq = await signIn('credentials', {
                email: e.email,
                password: e.password,
                redirect: false,
            })
            if (loginReq?.ok) {
                swal({
                    icon: "success",
                    title: 'successfull signUp and login',
                    timer: 1000,
                    buttons: [false],
                    className: styles.swal
                });
                setTimeout(() => {
                    router.push('/')
                }, 1000);
            } else {
                throw Error('cant login in blog please login in login page')
            }
        }
        setLoading(false)
        reset()
    }

    const inputCreateData: SignUpInputType[] = [
        { key: "UserName", type: "text", icon: <FaUser />, registerVal: "name", err: errors.name?.message },
        { key: "Email", type: "email", icon: <MdOutlineEmail />, registerVal: "email", err: errors.email?.message },
        { key: "Password", type: "password", icon: <MdLockOutline />, registerVal: "password", err: errors.password?.message },
    ]

    return (
        <div className="w-full flex flex-col justify-center items-center">
            {
                loading &&
                <div className='w-full h-screen fixed inset-0 z-40 bg-petBlue/50 flex flex-col items-center justify-center'>
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                    <div className='text-white'>please wait ...</div>
                </div>
            }
            <form className="space-y-8 w-full glass p-4 rounded-box dark:bg-primary bg-primary/20" onSubmit={handleSubmit(onSubmit)}>
                {
                    inputCreateData.map(item =>
                        <label className="form-control w-full" key={item.key}>
                            <InputLabel text={item.key}>
                                {item.icon}
                            </InputLabel>
                            <input
                                type={item.type}
                                {...register(item.registerVal)}
                                className={styles.inputStyle}
                            />
                            {item.err &&
                                <InputErr err={item.err} />
                            }
                        </label>
                    )
                }
                <button disabled={loading} type="submit" className={styles.authBtn}>Submit</button>

            </form>

            <div className="divider divider-primary" />
            <div className='mt-4'>
                <span>you have existing account? </span>
                <Link href={'/Auth/SignIn'} className={styles.authLink}>login</Link>
            </div>
        </div>

    )
}

export default SignUpForm;