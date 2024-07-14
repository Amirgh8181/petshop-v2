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
      <ScaleAnimation scaleVal delay={1} boxClass="w-1/2 absolute right-0 bottom-0">
        <StaticImageCopm img={dogBg} imgAlt="bg image" imgClass="md:w-[90%] mx-auto" />
      </ScaleAnimation>
    </main>
  );
}
