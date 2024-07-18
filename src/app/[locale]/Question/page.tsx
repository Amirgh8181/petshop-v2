import QuestionHoc from '@/src/components/UI/Hoc/QuestionHoc'
import QuestionContainer from '@/src/components/QuestionPage/QuestionContainer'

import mainImage from "@/public/images/Question/main.png"
import leftImage from "@/public/images/Question/secondary.png"
import rightImage from "@/public/images/Question/secondary2.png"
import { useTranslations } from 'next-intl'

const Question = () => {
  const t=useTranslations("PersonalityTest.hoc")
  return (
    <QuestionHoc
      mainImage={mainImage}
      leftImage={leftImage}
      rightImage={rightImage}
      text={t("title")}
      text1={t("description")}>

      <QuestionContainer />
    </QuestionHoc>
  )
}

export default Question
