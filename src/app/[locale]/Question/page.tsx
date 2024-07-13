import QuestionHoc from '@/src/components/UI/Hoc/QuestionHoc'
import QuestionContainer from '@/src/components/QuestionPage/QuestionContainer'

import mainImage from "@/public/images/Question/main.png"
import leftImage from "@/public/images/Question/secondary.png"
import rightImage from "@/public/images/Question/secondary2.png"

const Question = () => {
  return (
    <QuestionHoc
      mainImage={mainImage}
      leftImage={leftImage}
      rightImage={rightImage}
      text="Pet Club"
      text1={["All the Lorem Ipsum", "generators on the Internet tend", "to repeat"]}   >

      <QuestionContainer />
    </QuestionHoc>
  )
}

export default Question
