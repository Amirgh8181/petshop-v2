import { ShopItem } from '@/root/types'
import CardUi from '../../UI/Card'

const CategoryItemUi = ({ data }: { data: ShopItem[] | undefined }) => {
    return (
        <>
            {data
                ?
                <div className='grid place-items-center md:grid-cols-4 grid-cols-2 gap-8 px-2'>
                    {
                        data?.map(item =>

                            <CardUi product={item} key={item._id}/>
                        )

                    }
                </div >
                :
                <div className='w-full text-center'>
                    <h3 className='text-4xl font-bold capitalize'>no item found in this category</h3>
                </div>
            }
        </>
    )
}

export default CategoryItemUi