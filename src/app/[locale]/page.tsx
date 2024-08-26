import HeroSection from '@/src/components/Home/Hero';
import AboutUs from '@/src/components/Home/About-US';
import ShopPreview from '@/src/components/Home/ShopPreview';
import ClinicPreview from '@/src/components/Home/ClinicPreview';
import ShelterPreview from '@/src/components/Home/ShelterPreview';
import QuestionPreview from '@/src/components/Home/QuestionPreview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <ShopPreview />
      <QuestionPreview />
      <ClinicPreview />
      <ShelterPreview />
    </>
  );
}