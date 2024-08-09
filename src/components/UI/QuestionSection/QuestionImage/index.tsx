
import Image from 'next/image'
import img1 from "@/public/images/QuestionSection/1.png"
import img2 from "@/public/images/QuestionSection/2.png"
import img3 from "@/public/images/QuestionSection/3.png"
import img4 from "@/public/images/QuestionSection/4.png"
import StaticImageCopm from '../../StaticImage'
import ScaleAnimation from '../../Animation/ScaleAnimation'

const QuestionImage = () => {


    const img = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },

    ];



    return (
        <div
            className='w-full h-full grid grid-cols-2 gap-8'
        >
                {img.map((item, index) =>
                    <ScaleAnimation
                        scaleVal
                        amountView={0.8}
                        once
<<<<<<< HEAD
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



=======
                        delay={index * 0.1}
                        key={index}
                    >
                        <StaticImageCopm img={item.img} imgAlt='question' imgClass='sm:w-[70%] md:w-[80%] aspect-square mx-auto' />
                    </ScaleAnimation>

                )}
>>>>>>> vercel
        </div>
    )
}

export default QuestionImage;