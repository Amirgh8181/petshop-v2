"use client"
import { useEffect, useState } from 'react'
import { Session } from 'next-auth'
import { useSession } from 'next-auth/react'
import Profile from './Profile'
import SignInBtn from './SignInBtn'

export type authSectionProps = Session | null | undefined

const AuthSection = () => {
    const [isAuth, setIsAuth] = useState<authSectionProps>(undefined)
    const { data: session } = useSession()

    useEffect(() => {
        setIsAuth(session)
    }, [session])

    return (
        <>
            <Profile isAuth={isAuth} />
            <SignInBtn isAuth={isAuth} />
        </>
    )
}

export default AuthSection