"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation';
// react hook form
import { SubmitHandler, useForm } from 'react-hook-form'
//next auth
import { signIn } from 'next-auth/react';
// zod
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/src/schema/zodSchema/LoginSchema';
import { LoginDataType } from '@/src/types/AuthInput';
//component and styles
import styles from '../authstyle.module.css'
import InputErr from '@/src/components/UI/Inputs/InputErr';
//icons
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
//sweet alert
import swal from 'sweetalert';
import { AuthInputType } from '@/root/types';
import InputLabel from '../../UI/Inputs/InputLabel';


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
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()
 
    const search = searchParams.get('callbackUrl')
    console.log(search);
    
    //submit hadler
    const onSubmit: SubmitHandler<LoginDataType> = async (e) => {
        setLoading(true)
        //next auth
        const req = await signIn('credentials', {
            email: e.email,
            password: e.password,
            redirect: false,
        })
        console.log(req);
        
        setLoading(false)
        
    }

    const inputCreateData: LoginInputType[] = [
        { key: "Email", type: "email", icon: <MdOutlineEmail />, registerVal: "email", err: errors.email?.message },
        { key: "Password", type: "password", icon: <MdLockOutline />, registerVal: "password", err: errors.password?.message }
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
                                className={styles.inputStyle}
                                type={item.type}
                                {...register(item.registerVal)}
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
                <span>you dont have existing account? </span>
                <Link href={'/Auth/SignUp'} className={styles.authLink}>SignUp</Link>
            </div>


        </div>
    )
}

export default LoginForm;



/*


        if (req?.ok) {
            swal({
                icon: "success",
                title: 'successfull login',
                timer: 2000,
                buttons: [false],
                className: styles.swal
            });
            setTimeout(() => {
                router.push('/')
            }, 3000);
        } else {
            swal({
                icon: "warning",
                title: 'unsuccessfull login',
                timer: 2000,
                buttons: [false],
                className: styles.swal
            });
            setTimeout(() => {
                window.location.reload()
            }, 3000);
        }

*/