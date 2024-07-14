
import Image from 'next/image'
import img1 from "@/public/images/QuestionSection/1.png"
import img2 from "@/public/images/QuestionSection/2.png"
import img3 from "@/public/images/QuestionSection/3.png"
import img4 from "@/public/images/QuestionSection/4.png"
import StaticImageCopm from '../../StaticImage'

const QuestionImage = () => {


    const imgCol1 = [
        { img: img2 },
        { img: img4 },

    ];
    const imgCol2 = [
        { img: img1},
        { img: img3},
    ]


    return (
        <div
            className='min-w-[70%] h-full flex gap-4'
        >
            <div className='w-1/2 h-full flex flex-col justify-center items-center gap-4 mt-10'>
            {imgCol1.map((item,index) =>
                <StaticImageCopm img={item.img} imgAlt='question'
                     key={index} imgClass='w-[80%] aspect-square'/>
            )}
            </div>
            <div className='w-1/2 h-full flex flex-col justify-center items-center gap-4 mb-10'>
            {imgCol2.map((item,index) =>
                <Image src={item.img} width={175} height={175} alt='question'
                     key={index} className='w-[80%] aspect-square'/>
            )}
            </div>



        </div>
    )
}

export default QuestionImage;