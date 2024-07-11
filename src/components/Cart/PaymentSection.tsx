"use client"
import Link from 'next/link'
import TotalPrice from './TotalPrice'
import { useCartItems } from '@/src/stores/ShopStroes/useCartItem'

const PaymentSection = () => {
    const { CartItem } = useCartItems()

    return (
        <>
            {CartItem.length > 0 &&
                <div className='md:w-[30%] w-[90%] flex flex-col space-y-4 rounded-xl md:sticky md:top-28 glass p-4'>

                    <div className="space-y-2 bg-base-200 p-2 rounded-box">
                        <div className="">Any Discount Code?</div>
                        <div className="">
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <div className='bg-base-200 px-2 flex justify-between items-center md:text-lg text-xs py-4 rounded-box'>
                        <span>Delivery Date</span>
                        <span>2024/01/04</span>
                    </div>
                    <TotalPrice />
                    <div>
                        <Link href={'/Cart/Payment'}
                            className='btn bg-primary capitalize w-full'>
                            confirm payment
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default PaymentSection