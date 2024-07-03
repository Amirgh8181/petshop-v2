import Image from 'next/image'
import React from 'react'
import TextAnimations from '../Animation/TextAnimation'
import ScaleAnimation from '../Animation/ScaleAnimation'
import { useLocale } from 'next-intl'
import { GoogleSvg } from '@/src/assets/svgs'

interface AuthHoc {
    children: React.ReactNode
    mainImage: string,
    leftImage: string,
    rightImage: string,
    authType: string
}

const Hoc = ({
    children, mainImage, leftImage, rightImage, authType
}: AuthHoc
) => {
    const local = useLocale()

    return (
        <div className='flex md:flex-row flex-col w-[95vw] min-h-screen space-y-[6vmax] md:space-y-0 py-[7vmax]'>
            {/* left side of auth page */}

            <div className='order-2 md:order-1 md:w-1/2 w-full flex flex-col items-center'>
                <div className='md:space-y-8 w-[90%]'>
                    <div className='w-full h-16 btn shadow-inner shadow-primary/30 rounded-full bg-base-200'>
                        <GoogleSvg />
                        <div className='md:text-xl text-sm'>{`${authType}`} with google</div>
                    </div>

                    <div className="divider text-xs divider-primary" >
                        Or {`${authType}`} with Email
                    </div>

                    <div>
                        {children}
                    </div>
                </div>
            </div>

            {/* right side of auth page */}
            <div className='order-1 md:order-2 md:sticky md:top-[7vmax] md:self-start md:w-1/2 w-full md:h-auto grid place-items-center py-[10vmax] md:py-0'>
                <div className='relative md:h-[80vh] h-[70vh] md:w-[60%] w-[80%] bg-primary rounded-badge p-4 mx-auto'>

                    <div className='flex flex-col justify-center md:px-6 px-3 h-1/2 space-y-3'>
                        <TextAnimations
                            once
                            text={"Pet Club"}
                            typeAnimation='typing'
                            boxClass='text-4xl md:text-5xl font-bold' />
                        <TextAnimations
                            once
                            delay={1}
                            duration={0.5}
                            typeAnimation='lineOpacity'
                            text={["All the Lorem Ipsum", "generators on the Internet tend", "to repeat"]}
                            boxClass='w-3/4 text-sm md:text-lg text-pretty leading-4' />
                    </div>

                    <div className='h-[110%] w-[105%] absolute inset-0'>
                        <ScaleAnimation
                            scaleVal
                            boxClass={`absolute ${local === "fa" ? 'md:-right-[2vmax] -right-[6vmax]' : 'md:-left-[2vmax] -left-[6vmax]'} bottom-[20vh] animate-bounce`}
                            delay={2.5}
                            once
                        >
                            <Image src={leftImage} alt='main-login' width={75} height={75} className='scale-75 md:scale-100' />
                        </ScaleAnimation>

                        <ScaleAnimation
                            scaleVal
                            boxClass={`absolute bottom-0 ${local === "fa" ? 'left-0' : 'left-0'}right-0`}
                            delay={2}
                            once
                        >
                            <Image src={mainImage} alt='main-login' width={400} height={400} className={`${local === "fa" && 'rotateY'}`}
                            />
                        </ScaleAnimation>
                        <ScaleAnimation
                            scaleVal
                            boxClass={`absolute  ${local === "fa" ? 'md:left-0 -left-[3vmax]' : 'md:right-0 -right-[3vmax]'} top-[15vh] animate-bounce`}
                            delay={2.5}
                            once
                        >
                            <Image src={rightImage} alt='main-login' width={75} height={75} className='scale-75 md:scale-100' />
                        </ScaleAnimation>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hoc


