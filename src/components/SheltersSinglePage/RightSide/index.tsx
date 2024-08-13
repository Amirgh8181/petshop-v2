import Image from 'next/image'
import TranslateAnimation from '../../UI/Animation/TranslateAnimation'
import ScaleAnimation from '../../UI/Animation/ScaleAnimation'

const SheltersSinglePageRightSide = ({ img }: { img: string }) => {



    return (
        <div className='w-full p-4 flex flex-col space-y-6 items-center overflow-hidden'>
            <ScaleAnimation
                boxClass='w-full grid place-content-center'
                childClass='origin-top'
                scaleYVal
                delay={0.5}
                once
            >
                    <Image src={img} alt='adasd' width={500} height={300}
                        className='max-w-[90%] aspect-[9/7] rounded-[3rem] border-2 border-primary mx-auto'
                    />
            </ScaleAnimation>
            <div className='w-full flex gap-2'>
                <TranslateAnimation xVal={20} delay={0.75}
                    boxClass='w-[50%]'
                    once
                >
                    <Image src={img} alt='asdasd' width={100} height={100}
                        className='w-full opacity-60 hover:opacity-100 transition-all duration-300 rounded-box cursor-pointer border-2 border-primary' />
                </TranslateAnimation>
                <TranslateAnimation xVal={20} delay={1} once
                    boxClass='w-[50%]'
                >
                    <Image src={img} alt='asdasd' width={100} height={100}
                        className='w-full opacity-60 hover:opacity-100 transition-all duration-300 rounded-box cursor-pointer border-2 border-primary' />
                </TranslateAnimation>
                <TranslateAnimation xVal={20} delay={1.25} once
                    boxClass='w-[50%]'
                >
                    <Image src={img} alt='asdasd' width={100} height={100}
                        className='w-full opacity-60 hover:opacity-100 transition-all duration-300 rounded-box cursor-pointer border-2 border-primary' />
                </TranslateAnimation>
            </div>
        </div>
    )
}

export default SheltersSinglePageRightSide