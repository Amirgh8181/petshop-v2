import React from 'react'
import heroImage from "../../../public/images/hero/hero-big.png"
import { WaveBg } from '@/src/assets/svgs'
import Image from 'next/image'
const HeroSection = () => {



    return (
        <div
        className='w-full h-screen flex justify-center pt-8 relative'
      >
        <WaveBg className="w-full h-screen absolute inset-0 text-primary" />
        <div className="hero  w-[80%] h-[80%] glass rounded-box">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <Image
              src={heroImage} width={heroImage.width} height={heroImage.height} alt='heroImage'
              className="w-[40%] aspect-square rounded-lg shadow-2xl object-cover" />
            <div>
              <h1 className="text-5xl font-bold">Box Office News!</h1>
              <p className="py-6 w-[50%]">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default HeroSection




{/*



*/}