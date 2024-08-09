import QuestionText from '../../UI/QuestionSection/QuestionText';
import QuestionImage from '../../UI/QuestionSection/QuestionImage';

const QuestionPreview = () => {
    return (
        <div className='w-full grid place-items-center overflow-hidden'
        >
            <div className='w-[90%] h-auto p-8 flex flex-col md:flex-row items-center justify-center bg-primary space-y-4 md:space-y-0 rounded-3xl mx-auto overflow-hidden'>



                <div className='md:w-1/2 w-full md:h-full h-3/4 flex items-center justify-center'>
                    <QuestionText />
                </div>
                <div className='md:w-1/2 w-full md:h-full h-3/4 flex items-center justify-center'>
                    <QuestionImage />
                </div>
            </div>
        </div>
    )
}

export default QuestionPreview;
