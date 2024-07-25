import HeroSection from '@/src/components/Home/Hero';
import AboutUs from '@/src/components/Home/About-US';
import ShopPreview from '@/src/components/Home/ShopPreview';
import QuestionContainer from '@/src/components/Home/QuestionPreview';
import ClinicPreview from '@/src/components/Home/ClinicPreview';
import ShelterPreview from '@/src/components/Home/ShelterPreview';

export default function Home() {
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