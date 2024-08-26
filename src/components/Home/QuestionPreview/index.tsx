import QuestionText from '../../UI/QuestionSection/QuestionText';
import QuestionImage from '../../UI/QuestionSection/QuestionImage';

const QuestionPreview = () => {
    return (

        <div className='grid sm:grid-cols-2 grid-cols-1 place-items-center w-[90%] p-8 bg-primary space-y-4 md:space-y-0 rounded-3xl mx-auto overflow-hidden'>
            <QuestionText />
            <QuestionImage />
        </div>
    )
}

export default QuestionPreview;
