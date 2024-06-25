import { useTranslations } from 'next-intl';
import Image from 'next/image';
import heroImage from "../../../public/images/hero/hero-big.png"
export default function Home() {
  const t = useTranslations('Index');
  return (
    <div style={{
      backgroundImage: `url("/svg/wave.svg")`,
      backgroundRepeat: "no-repeat",
      objectFit: "cover"
    }}
      className='w-full h-screen flex justify-center pt-8'
    >
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
  );
}