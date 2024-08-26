import ClinicSinglePageRightSide from '@/src/components/ClinicSinglePage/RightSide';
import DoctorSection from '@/src/components/ClinicSinglePage/Leftsid/DoctorSection';
import RelationWay from '@/src/components/ClinicSinglePage/Leftsid/RelationWay';
import getClinicItemPage from '@/src/lib/getClinicItemPage';
import { clinicAndSheltersData } from '@/root/types';
import OneLevelBackBtn from '@/src/components/UI/Button/OneLevelBack';

const ClinicPage = async ({ params }: { params: { clinicpage: string } }) => {

    const req: clinicAndSheltersData = await getClinicItemPage(params.clinicpage)
    return (
        <div className='w-full md:mt-[8vmax] md:mb-[2vmax] mt-[14vmax] mb-[6vmax] relative flex flex-col sm:flex-row space-y-4 sm:space-y-0'>
            <OneLevelBackBtn />
            <div className='xl:w-[50%] sm:w-[40%] w-[90%] order-2 sm:order-1 space-y-4 mx-auto'>
                <DoctorSection clinicData={req} />
                <RelationWay clinicData={req} />
            </div>
            <div className='sm:w-[50%] w-[90%] mx-auto md:sticky top-[5vmax] order-1 sm:order-2
                     rounded-box customGlass overflow-hidden'>
                <ClinicSinglePageRightSide clinicData={req} />
            </div>
        </div>
    )
}

export default ClinicPage


