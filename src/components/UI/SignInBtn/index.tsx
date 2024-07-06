"use client"
import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { RiLoginBoxFill } from 'react-icons/ri'

const SignInBtn = () => {
    const t = useTranslations("navItem")
    const pathname: string = usePathname()
    const router = useRouter()

    const redirectSignIn = () => {
        signIn()
    }

    return (
        <button onClick={redirectSignIn} className="btn !px-2 font-bold">
            {t("sign in")}
            <RiLoginBoxFill size={"20px"} />
        </button>
    )
}

export default SignInBtn