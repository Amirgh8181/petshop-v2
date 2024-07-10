import { useTranslations } from 'next-intl';
import Image from 'next/image';
import heroImage from "../../../public/images/hero/hero-big.png"
import { WaveBg } from '@/src/assets/svgs';
import HeroSection from '@/src/components/Home/Hero';
import AboutUs from '@/src/components/Home/About-US';
import ShopPreview from '@/src/components/Home/ShopPreview';
import QuestionContainer from '@/src/components/Home/QuestionPreview';
import ClinicPreview from '@/src/components/Home/ClinicPreview';
import ShelterPreview from '@/src/components/Home/ShelterPreview';

export default function Home() {
  const t = useTranslations('Index');
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ShopPreview />
      <QuestionContainer />
      <ClinicPreview />
      <ShelterPreview />
    </>
  );
}