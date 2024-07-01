import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import HeroContainer from '@/src/components/UI/Hero/HerosContainer/HeroContainer';

const CategoyPageHeader = ({ type }: { type: string }) => {



    const categ = ["All", "Beds", "Furnitures", "Treats", "Food", "Health", "Toys"]

    return (
        <>
            <HeroContainer>
                <div className='heroSection flex justify-center items-center '>
                    <Image src={'/images/Shop/category/categoy-hero.webp'}
                        alt='category hero pic'
                        width={700}
                        height={700}
                        className='md:max-w-[80%] aspect-[16/12] rounded-[3rem] relative object-cover' />
                </div>

                <div className='heroSection flex items-center px-8 text-white'>
                    <div className='h-[60%]'>
                        <div className='divider divider-start'>lorem ipsum</div>
                        <div className='flex flex-col justify-center h-[90%]'>
                            <div className='md:text-4xl text-2xl font-bold'>Duis aute irure dolor in </div>
                            <div className='text-sm'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </div>
                        </div>
                        <div className='divider divider-end'>lorem ipsum</div>
                    </div>
                </div>
            </HeroContainer>

                <ul className='flex items-center justify-around md:w-[60%] w-full h-full md:font-bold mt-[2vmax]'>
                    {categ.map(item =>
                        <Link href={`/Shop/category/${item}`} key={item}
                            className={type === item ?
                                'text-petBlue border-b-2 border-b-petBlue pb-2 text-sm md:text-lg cursor-pointer'
                                :
                                'text-petBlue/70 hover:text-petBlue pb-2 cursor-pointer hover:border-b-2 hover:border-b-petBlue text-sm md:text-lg'}>
                            {item}
                        </Link>
                    )}
                </ul>
        </>

    )
}

export default CategoyPageHeader