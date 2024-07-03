import LoginForm from '@/src/components/Auth/login/LoginForm'
import Hoc from '@/src/components/UI/Hoc'
import React from 'react'

const LoginContainer = () => {
    return (
        <div>
            <Hoc mainImage={"/images/AuthPic/login1.png"} leftImage={"/images/AuthPic/login2.png"} rightImage={"/images/AuthPic/login3.png"} authType={"Login"}>
                <LoginForm />
            </Hoc>
        </div>
    )
}

export default LoginContainer
/*
<LoginForm />
*/