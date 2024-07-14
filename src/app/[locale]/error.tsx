'use client';
import bg from "@/public/images/Error/bg.png"
import ScaleAnimation from '@/src/components/UI/Animation/ScaleAnimation';
import TranslateAnimation from "@/src/components/UI/Animation/TranslateAnimation";
import StaticImageCopm from '@/src/components/UI/StaticImage';
import { useTranslations } from 'next-intl';
import Link from "next/link";

export default function Error({ error, reset }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations('Error');

  return (
    <div className='w-full h-screen flex justify-center items-center overflow-hidden'>
      <div className="relative z-10 customGlass rounded-box opacity-70 hover:opacity-100 transition-all duration-300 
      p-6 space-y-4 max-w-[70%]">

        <TranslateAnimation xVal={40}>
          <h6
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical',
            }}>
            {error.message}
          </h6>
        </TranslateAnimation>
        <div className="flex justify-center space-x-4">
          <TranslateAnimation yVal={20} delay={1}>
            <button className="btn bg-primary capitalize !px-2" onClick={reset}>retry</button>
          </TranslateAnimation>
          <TranslateAnimation yVal={20} delay={1}>
            <Link href={"/"} className="btn bg-primary capitalize !px-2">go to home page</Link>
          </TranslateAnimation>
        </div>
      </div>
      <ScaleAnimation scaleVal delay={1} boxClass="w-full absolute bottom-0 right-0 left-0 overflow-hidden">
        <StaticImageCopm img={bg} imgAlt="bg image" imgClass="md:w-[40%] w-full mx-auto" />
      </ScaleAnimation>
    </div>
  );
}

{/*
  import StaticImageCopm from "@/src/components/UI/StaticImage";
import dogBg from "@/public/images/NotFound/dogBg.png"
import Link from "next/link";
import TextAnimations from "@/src/components/UI/Animation/TextAnimation";
import TranslateAnimation from "@/src/components/UI/Animation/TranslateAnimation";
import ScaleAnimation from "@/src/components/UI/Animation/ScaleAnimation";
export default function NotFoundPage() {
  return (
    <main className='w-full h-screen relative inset-0 customGlass grid place-content-center' >
      <div className="text-center z-10 space-y-4">
        <div className="textClip bg-[url('/images/NotFound/textBg.jpg')] bg-contain flex animate-bounce">
          <span className="text-9xl md:text-[15rem]">4</span>
          <span className="text-9xl md:text-[15rem]">0</span>
          <span className="text-9xl md:text-[15rem]">4</span>
        </div>
        <TextAnimations text={"page not found"} typeAnimation="typing" el="h1" boxClass="capitalize" />
        <TranslateAnimation yVal={20} delay={1}>
          <Link href={"/"} className="btn bg-primary capitalize !px-2">go to home page</Link>
        </TranslateAnimation>
      </div>

      <ScaleAnimation scaleVal delay={1} boxClass="w-1/2 absolute left-0 bottom-0">
        <StaticImageCopm img={dogBg} imgAlt="bg image" imgClass="md:w-[90%] rotateY mx-auto" />
      </ScaleAnimation>

    </main>
  );
}
  */}