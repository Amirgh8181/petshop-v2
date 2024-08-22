import { TabsProps } from '@/src/components/UI/Tabs'
import { clinicAndSheltersData, } from '@/root/types'
import Image from 'next/image'
import Tabs from '@/src/components/UI/Tabs'
import { useTranslations } from 'next-intl'
import ScaleAnimation from '../../UI/Animation/ScaleAnimation'

const ClinicSinglePageRightSide = ({ clinicData }: { clinicData: clinicAndSheltersData }) => {
    const t = useTranslations("Clinic.singlePage")
    const tabData: TabsProps[] = [
        { head: t("about"), content: clinicData?.shortDescription },
        { head: t("reviews"), content: clinicData?.shortDescription }
    ]
    return (
        <>
            <ScaleAnimation
                once
                scaleVal
                delay={0.5}
            >
                <div className='w-full grid place-items-center space-y-6'>
                    <Image src={clinicData.attachmentFile} alt='clinic img' width={500} height={300}
                        className='w-full aspect-[9/5] rounded-t-box'
                    />
                    <h3 className='text-center'>
                        {clinicData.name}
                    </h3>
                    <div className='w-[90%] mx-auto pb-4'>
                        <Tabs renderData={tabData} />
                    </div>
                </div>
            </ScaleAnimation>
        </>
    )
}

export default ClinicSinglePageRightSide