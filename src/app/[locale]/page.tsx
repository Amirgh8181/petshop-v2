import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/src/components/Home/Hero'));
const AboutUs = dynamic(() => import('@/src/components/Home/About-US'));
const ShopPreview = dynamic(() => import('@/src/components/Home/ShopPreview'));
const ClinicPreview = dynamic(() => import('@/src/components/Home/ClinicPreview'));
const ShelterPreview = dynamic(() => import('@/src/components/Home/ShelterPreview'));
const QuestionPreview = dynamic(() => import('@/src/components/Home/QuestionPreview'));

export default function Home() {
  return (
    <>
      <HeroSection />
      <ShopPreview />
      <QuestionPreview />
      <ClinicPreview />
      <ShelterPreview />
      <AboutUs />
    </>
  );
}