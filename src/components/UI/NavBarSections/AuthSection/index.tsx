import { getServerSession, Session } from 'next-auth'
import Profile from './Profile'
import SignInBtn from './SignInBtn'
import { authOption } from '@/src/config/auth'

export type authSectionProps = Session | null | undefined

const AuthSection = async () => {
    const isAuth = await getServerSession(authOption)
    return (
        <>
            <Profile isAuth={isAuth} />
            <SignInBtn isAuth={isAuth} />
        </>
    )
}

export default AuthSection