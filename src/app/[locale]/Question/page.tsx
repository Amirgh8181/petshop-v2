import QuestionContainer from '@/src/components/QuestionPage/QuestionContainer'
import mainImage from "@/public/images/Question/main.png"
import leftImage from "@/public/images/Question/secondary.png"
import rightImage from "@/public/images/Question/secondary2.png"
import { useTranslations } from 'next-intl'
import HocSection from '@/src/components/UI/Hoc'

const Question = () => {
  const t = useTranslations("PersonalityTest.hoc")
  return (
    <HocSection mainImage={mainImage}
      leftImage={leftImage}
      rightImage={rightImage}
      text={t("title")}
      text1={t("description")}
      faqLink='/Question/#questionFaq'
    >
        <QuestionContainer />
    </HocSection>
  )
}

export default Question
