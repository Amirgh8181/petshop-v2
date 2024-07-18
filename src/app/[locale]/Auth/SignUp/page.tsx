import SignUpForm from '@/src/components/Auth/SignUp/SignUpForm'
import React from 'react'
import mainImage from "@/public/images/AuthPic/signUp1.png"
import leftImage from "@/public/images/AuthPic/signUp2.png"
import rightImage from "@/public/images/AuthPic/login3.png"
import AuthHoc from '@/src/components/UI/Hoc/AuthHoc/inddex'
import { useTranslations } from 'next-intl'
const SignUpContainer = () => {
    const t=useTranslations("Auth.hoc")
    return (
        <AuthHoc
            mainImage={mainImage}
            leftImage={leftImage}
            rightImage={rightImage}
            authType={t("signUp")}
            text={t("title")}
            text1={[t("description1"), t("description2"), t("description3")]}
        >

            <SignUpForm />
        </AuthHoc>
    )
}

export default SignUpContainer