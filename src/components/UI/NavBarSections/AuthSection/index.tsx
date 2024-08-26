"use client"
import { Session } from 'next-auth'
import Profile from './Profile'
import SignInBtn from './SignInBtn'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export type authSectionProps = Session | null | undefined

const AuthSection = () => {
    const [isAuth, serIsAuth] = useState<Session | null>(null)
    const { data: session } = useSession()
    useEffect(() => {
        serIsAuth(session)
    }, [session])
    return (
        <>
            {
                isAuth ?
                    <Profile />
                    :
                    <SignInBtn />
            }
        </>
    )
}

export default AuthSection