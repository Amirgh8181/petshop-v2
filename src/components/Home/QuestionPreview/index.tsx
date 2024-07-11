import QuestionText from '../../UI/QuestionSection/QuestionText';
import QuestionImage from '../../UI/QuestionSection/QuestionImage';
import ScaleAnimation from '../../UI/Animation/ScaleAnimation';
import TranslateAnimation from '../../UI/Animation/TranslateAnimation';
const QuestionContainer = () => {

    return (
        <div className='w-full h-screen grid place-items-center overflow-hidden'
        >
            <div className='w-[90%] h-auto p-8 flex flex-col md:flex-row items-center justify-center bg-primary space-y-4 md:space-y-0 rounded-3xl mx-auto overflow-hidden'>


                <TranslateAnimation
                xVal={30}
                amountView={0.8}
                    boxClass='md:w-1/2 w-full md:h-full h-1/4 flex items-center justify-center'
                >
                    <QuestionText />
                </TranslateAnimation>
                <ScaleAnimation
                scaleVal
                amountView={0.8}
                    boxClass='md:w-1/2 w-full md:h-full h-3/4 flex items-center justify-center'
                >
                    <QuestionImage />
                </ScaleAnimation>
            </div>
        </div>
    )
}

export default QuestionContainer;
