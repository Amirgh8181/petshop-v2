"use client"
import { useCartItems } from '@/src/stores/ShopStroes/useCartItem'

const TotalPrice = () => {
    const { totalPrice } = useCartItems()

    return (
        <>
            {
                totalPrice !== 0 &&
                <div className='flex justify-around mt-4 w-full text-2xl font-bold'>
                    <div>Total Price</div>
                    <div>
                        {`$${totalPrice}`}
                    </div>
                </div>
            }
        </>
    )
}

export default TotalPrice