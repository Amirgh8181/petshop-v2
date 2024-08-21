import { ShopItem } from '@/root/types'
import CardUi from '../../UI/Card'

const CategoryItemUi = ({ data }: { data: ShopItem[] | undefined }) => {
    return (
        <>
            {data
                ?
                <div className='w-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 md:gap-8 px-2'>
                    {
                        data?.map(item =>
                            <CardUi product={item} key={item._id} />
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