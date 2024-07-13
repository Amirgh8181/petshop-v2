import LoginForm from '@/src/components/Auth/login/LoginForm'
import AuthHoc from '@/src/components/UI/Hoc/AuthHoc/inddex'
import React from 'react'

import mainImage from "@/public/images/AuthPic/login1.png"
import leftImage from "@/public/images/AuthPic/login2.png"
import rightImage from "@/public/images/AuthPic/login3.png"
const LoginContainer = () => {
    return (
        <div>
            <AuthHoc
                mainImage={mainImage}
                leftImage={leftImage}
                rightImage={rightImage}
                authType={"Login"}
                text="Pet Club"
                text1={["All the Lorem Ipsum", "generators on the Internet tend", "to repeat"]}
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