import SignUpForm from '@/src/components/Auth/SignUp/SignUpForm'
import React from 'react'
import mainImage from "@/public/images/AuthPic/signUp1.png"
import leftImage from "@/public/images/AuthPic/signUp2.png"
import rightImage from "@/public/images/AuthPic/login3.png"
import AuthHoc from '@/src/components/UI/Hoc/AuthHoc'
import { useTranslations } from 'next-intl'
import HocSection from '@/src/components/UI/Hoc'
const SignUpContainer = () => {
    const t = useTranslations("Auth.hoc")
    return (
        <HocSection
            mainImage={mainImage}
            leftImage={leftImage}
            rightImage={rightImage}
            text={t("title")}
            text1={[t("description1"), t("description2"), t("description3")]}
            faqLink='/Auth/SignUp/#authFaq'
        >
            <AuthHoc
                authType={t("signUp")}
            >

                <SignUpForm />
            </AuthHoc>
        </HocSection>
    )
}

export default SignUpContainer