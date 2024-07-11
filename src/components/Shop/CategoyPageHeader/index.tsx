import heroimg from '@/public/images/Shop/category/categoy-hero.webp'
import { Hero } from '@/ui/Hero';
const CategoyPageHeader = () => {




    return (
        <>
            <Hero
                img={heroimg}
                bgImage={heroimg}
                title='Duis aute irure dolor in '
                desc='consectetur adipiscing elit, sed do eiusmod tempor incididunt ut'
            />
        </>

    )
}

export default CategoyPageHeader


/*
                            <div className='md:text-4xl text-2xl font-bold'> </div>
                            <div className='text-sm'> </div>
*/