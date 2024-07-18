import { StaticImageData } from 'next/image'
import { GoogleSvg } from '@/src/assets/svgs'
import HocUi from '../HocUi'
import { useTranslations } from 'next-intl'

interface AuthHocProps {
    children: React.ReactNode
    text: string,
    text1: string | string[],
    leftImage: StaticImageData,
    mainImage: StaticImageData,
    rightImage: StaticImageData
    authType: string
}

const AuthHoc = ({
    children, mainImage, leftImage, rightImage, text, text1, authType
}: AuthHocProps
) => {

    const t = useTranslations("Auth.hoc")
    return (
        <div className='flex md:flex-row flex-col w-[95vw] min-h-screen space-y-[6vmax] md:space-y-0 py-[7vmax]'>
            {/* left side of auth page */}

            <div className='order-2 md:order-1 md:w-1/2 w-full flex flex-col items-center'>
                <div className='md:space-y-8 w-[90%]'>
                    <div className='w-full h-16 btn shadow-inner shadow-primary/30 rounded-full bg-base-200'>
                        <GoogleSvg />
                        <div className='md:text-xl text-sm'>{`${authType}`} {t("google")}</div>
                    </div>

                    <div className="divider text-xs divider-primary" >
                        {t("or")} {`${authType}`} {t("email")}
                    </div>

                    <div>
                        {children}
                    </div>
                </div>
            </div>

            {/* right side of auth page */}
            <HocUi mainImage={mainImage} leftImage={leftImage} rightImage={rightImage} text={text} text1={text1} />
        </div>
    )
}

export default AuthHoc


