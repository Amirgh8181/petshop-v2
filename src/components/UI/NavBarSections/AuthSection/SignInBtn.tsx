"use client"
import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { RiLoginBoxFill } from 'react-icons/ri'

const SignInBtn = () => {

    const t = useTranslations("navItem")
    return (

            <button onClick={() => signIn()} className="navbarBtn md:p-[0.6rem] xl:p-[0.9rem] flex justify-center items-center font-bold">
                <span className='md:flex hidden mx-1 xl:text-2xl'>{t("sign in")}</span>
                <RiLoginBoxFill className='navIconSize' />
            </button>

    )
}

export default SignInBtn