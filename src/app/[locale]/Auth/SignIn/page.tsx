import LoginForm from '@/src/components/Auth/login/LoginForm'
import AuthHoc from '@/src/components/UI/Hoc/AuthHoc'
import React from 'react'

import mainImage from "@/public/images/AuthPic/login1.png"
import leftImage from "@/public/images/AuthPic/login2.png"
import rightImage from "@/public/images/AuthPic/login3.png"
import { useTranslations } from 'next-intl'
import HocSection from '@/src/components/UI/Hoc'
const LoginContainer = () => {
    const t = useTranslations("Auth.hoc")
    return (
        <HocSection
            mainImage={mainImage}
            leftImage={leftImage}
            rightImage={rightImage}
            text={t("title")}
            text1={[t("description1"), t("description2"), t("description3")]}
            faqLink='/Auth/SignIn/#authFaq'
        >
            <AuthHoc
                authType={t("login")}
            >
                <LoginForm />
            </AuthHoc>
        </HocSection>
    )
}

export default LoginContainer
/*
<LoginForm />
*/