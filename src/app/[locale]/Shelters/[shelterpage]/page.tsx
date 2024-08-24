import { clinicAndSheltersData } from '@/root/types';
import SheltersSinglePageLeftSide from '@/src/components/SheltersSinglePage/LeftSide';
import SheltersSinglePageRightSide from '@/src/components/SheltersSinglePage/RightSide';
import OneLevelBackBtn from '@/src/components/UI/Button/OneLevelBack';
import { shelterData } from '@/src/data/SheltersData';
import getShelterItemPage from '@/src/lib/getShelterItemPage';


const ShelterPage = async ({ params }: { params: { shelterpage: string } }) => {
    //const req: clinicAndSheltersData = await getShelterItemPage(params.shelterpage)
    const req=shelterData.find(item=>item._id===params.shelterpage) as clinicAndSheltersData

    return (
        <div className='w-full relative'>
            <OneLevelBackBtn />
            <div dir='ltr' className='w-[90%] grid grid-cols-1 md:grid-cols-2 gap-4 customGlass rounded-badge mx-auto md:mt-[8vmax] md:mb-[2vmax] mt-[14vmax] mb-[6vmax] '>
                <div className='w-full grid grid-cols-1 place-content-center space-y-4 md:order-1 order-2'>
                    <SheltersSinglePageLeftSide shelterData={req} />
                </div>
                <div className='flex flex-col items-center w-full p-4 md:order-2 order-1'>
                    <SheltersSinglePageRightSide img={req.attachmentFile} />
                </div>
            </div>
        </div>
    )
}

export default ShelterPage

{/*


    */}