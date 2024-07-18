import LoginForm from '@/src/components/Auth/login/LoginForm'
import AuthHoc from '@/src/components/UI/Hoc/AuthHoc/inddex'
import React from 'react'

import mainImage from "@/public/images/AuthPic/login1.png"
import leftImage from "@/public/images/AuthPic/login2.png"
import rightImage from "@/public/images/AuthPic/login3.png"
import { useTranslations } from 'next-intl'
const LoginContainer = () => {
    const t=useTranslations("Auth.hoc")
    return (
        <div>
            <AuthHoc
                mainImage={mainImage}
                leftImage={leftImage}
                rightImage={rightImage}
                authType={t("login")}
                text={t("title")}
                text1={[t("description1"),t("description2"),t("description3")]}
            >
                <LoginForm />
            </AuthHoc>
        </div>
    )
}

export default LoginContainer
/*
<LoginForm />
*/