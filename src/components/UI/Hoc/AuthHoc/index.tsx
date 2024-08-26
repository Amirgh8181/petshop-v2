import { GoogleSvg } from '@/src/assets/svgs'
import { useTranslations } from 'next-intl'

interface AuthHocProps {
    children: React.ReactNode
    authType: string
}

const AuthHoc = ({
    children, authType
}: AuthHocProps
) => {

    const t = useTranslations("Auth.hoc")
    return (
        <div className='w-[80%] md:space-y-8 order-2 sm:order-1 mx-auto' id='authFaq'>
            <div className='w-full h-16 btn shadow-inner shadow-primary/30 rounded-full bg-base-200'>
                <GoogleSvg/>
                <p className='hocTextSize'>{`${authType}`} {t("google")}</p>
            </div>

            <div className="divider divider-primary" >
                <p className='hocTextSize'>
                    {t("or")} {`${authType}`} {t("email")}
                </p>
            </div>

                {children}

        </div>
    )
}

export default AuthHoc

