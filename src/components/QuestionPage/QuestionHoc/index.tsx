import Image from 'next/image'
import React from 'react'

interface QuestionHoc {
    children: React.ReactNode,
    step: number
}



const QuestionHoc = ({ children, step }: QuestionHoc) => {

    return (
        <div className='flex md:flex-row flex-col items-center md:justify-center w-full space-y-[8vmax] md:space-y-0 p-6 md:my-[7vmax] my-[10vmax]'>
            {/* left side of auth page */}
            <div className='h-full w-full md:w-1/2 flex justify-center items-center'>
                <div className='relative h-[80vh]  w-[80%] bg-petBlue rounded-3xl p-4'>

                    <div className='h-[110%] w-[115%] absolute top-0 bottom-0 -right-10 mx-auto'>
                        <div className='absolute left-0 bottom-[20vh] animate-bounce'>
                            <Image src={"/images/Question/secondary.png"} alt='main-login' width={75} height={75} />
                        </div>
                        <div className='absolute bottom-0 right-0'>
                            <Image src={"/images/Question/main.png"} alt='main-login' width={300} height={300}
                            />
                        </div>
                        <div className='absolute right-[3vw] top-[15vh] animate-bounce'>
                            <Image src={"/images/Question/secondary2.png"} alt='main-login' width={75} height={75} />
                        </div>

                    </div>
                </div>
            </div>

            {/* right side of auth page */}
            <div className='h-full w-full md:w-[60%] flex flex-col justify-center items-center space-y-6 mt-12 md:mt-0'>
                <div className='w-[90%] text-center text-lg font-bold'>
                    The passage is attributed to an unknown typesetter in the 15th century whoMalorum for
                    use in a type specimen book?
                </div>
                <div className='w-full flex items-center justify-center '>
                    {children}
                </div>

                <progress className="progress progress-primary max-w-md" value={step !== 21 ? `${step * 5-5}` : "100"} max="100"></progress>
            </div>
        </div>
    )
}

export default QuestionHoc;



/*
       
*/