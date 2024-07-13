import SignUpForm from '@/src/components/Auth/SignUp/SignUpForm'
import React from 'react'
import mainImage from "@/public/images/AuthPic/signUp1.png"
import leftImage from "@/public/images/AuthPic/signUp2.png"
import rightImage from "@/public/images/AuthPic/login3.png"
import AuthHoc from '@/src/components/UI/Hoc/AuthHoc/inddex'
const SignUpContainer = () => {
    return (
            <AuthHoc
                mainImage={mainImage}
                leftImage={leftImage}
                rightImage={rightImage}
                authType={"SignUp"}
                text="Pet Club"
                text1={["All the Lorem Ipsum", "generators on the Internet tend", "to repeat"]}
            >

                <SignUpForm />
            </AuthHoc>
    )
}

export default SignUpContainer