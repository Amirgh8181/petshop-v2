import SignUpForm from '@/src/components/Auth/SignUp/SignUpForm'
import Hoc from '@/src/components/UI/Hoc'
import React from 'react'

const SignUpContainer = () => {
    return (
        <Hoc mainImage={"/images/AuthPic/signUp1111.png"} leftImage={"/images/AuthPic/signUp2.png"} rightImage={"/images/AuthPic/login3.png"} authType={"SignUp"}>
                <SignUpForm />
        </Hoc>
    )
}

export default SignUpContainer