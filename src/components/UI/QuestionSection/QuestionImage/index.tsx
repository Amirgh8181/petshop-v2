
import Image from 'next/image'
import img1 from "@/public/images/QuestionSection/1.png"
import img2 from "@/public/images/QuestionSection/2.png"
import img3 from "@/public/images/QuestionSection/3.png"
import img4 from "@/public/images/QuestionSection/4.png"
import StaticImageCopm from '../../StaticImage'
import ScaleAnimation from '../../Animation/ScaleAnimation'

const QuestionImage = () => {


    const imgCol1 = [
        { img: img2 },
        { img: img4 },

    ];
    const imgCol2 = [
        { img: img1 },
        { img: img3 },
    ]


    return (
        <div
            className='min-w-[70%] h-full flex gap-4'
        >
            <div className='w-1/2 h-full flex flex-col justify-center items-center gap-4 mt-10'>
                {imgCol1.map((item, index) =>
                    <ScaleAnimation
                        scaleVal
                        amountView={0.8}
                        once
                        delay={index * 0.2}
                        key={index}
                    >
                        <StaticImageCopm img={item.img} imgAlt='question'
                            imgClass='w-[80%] aspect-square' />
                    </ScaleAnimation>

                )}
            </div>
            <div className='w-1/2 h-full flex flex-col justify-center items-center gap-4 mb-10'>
                {imgCol2.map((item, index) =>
                    <ScaleAnimation
                        scaleVal
                        amountView={0.8}
                        once
                        delay={index * 0.3}
                        key={index}
                    >
                        <Image src={item.img} width={175} height={175} alt='question'
                            className='w-[80%] aspect-square' />
                    </ScaleAnimation>
                )}
            </div>



        </div>
    )
}

export default QuestionImage;