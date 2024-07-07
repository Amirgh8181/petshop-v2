import { signIn } from 'next-auth/react'
import { useTranslations } from 'next-intl'
import { RiLoginBoxFill } from 'react-icons/ri'
import { authSectionProps } from '.'

const SignInBtn = ({isAuth}:{isAuth:authSectionProps}) => {

    const t = useTranslations("navItem")
    return (
        <>{
            isAuth !== undefined && !isAuth &&
            <button onClick={() => signIn()} className="btn !px-2 font-bold">
                {t("sign in")}
                <RiLoginBoxFill size={"20px"} />
            </button>
        }
        </>
    )
}

export default SignInBtn