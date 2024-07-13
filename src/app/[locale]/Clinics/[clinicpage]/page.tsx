import ClinicSinglePageRightSide from '@/src/components/ClinicSinglePage/RightSide';
import DoctorSection from '@/src/components/ClinicSinglePage/Leftsid/DoctorSection';
import RelationWay from '@/src/components/ClinicSinglePage/Leftsid/RelationWay';
import getClinicItemPage from '@/src/lib/getClinicItemPage';
import ScaleAnimation from '@/src/components/UI/Animation/ScaleAnimation';
import TranslateAnimation from '@/src/components/UI/Animation/TranslateAnimation';

const ClinicPage = async ({ params }: { params: { clinicpage: string } }) => {

    const req = await getClinicItemPage(params.clinicpage)
    return (
        <div className='w-full min-h-screen flex justify-center items-center md:py-[5vmax] py-[7dvh]'>
            <div className='w-[90%] flex flex-col md:flex-row md:justify-between items-center md:items-start mt-6 '>
                <TranslateAnimation
                    yVal={40}
                    once
                    stiffness={120}
                    boxClass='md:w-[40%] w-full order-2 md:order-1'
                    childClass='w-full flex flex-col items-center space-y-4'
                >
                    <DoctorSection clinicData={req} />
                    <RelationWay clinicData={req} />
                </TranslateAnimation>
                <ScaleAnimation
                    once
                    scaleVal
                    delay={0.5}
                    boxClass='md:sticky top-[5vmax] md:w-[55%] w-full order-1 md:order-2 my-[2vmax] md:my-0'
                    childClass='grid place-content-center rounded-box customGlass p-4'
                >
                    <ClinicSinglePageRightSide clinicData={req} />
                </ScaleAnimation>
            </div>
        </div>
    )
}

export default ClinicPage