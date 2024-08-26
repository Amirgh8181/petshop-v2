"use client"
import Link from 'next/link'
import TotalPrice from './TotalPrice'
import { useCartItems } from '@/src/stores/ShopStroes/useCartItem'
import { useTranslations } from 'next-intl'

const PaymentSection = () => {
    const { CartItem } = useCartItems()
    const t=useTranslations("Cart")
    return (
        <>
            {CartItem.length > 0 &&
                <div className='md:w-[30%] w-[90%] flex flex-col space-y-4 rounded-xl md:sticky md:top-36 glass p-4'>

                    <div className="space-y-2 bg-base-200 p-2 rounded-box">
                        <h6 >{t("discount")}</h6>
                        <input type="text" placeholder={t("discountInp")} className="input input-bordered w-full" />
                    </div>
                    <div className='bg-base-200 px-2 flex justify-between items-center md:text-lg text-xs py-4 rounded-box'>
                        <span>{t("delivery")}</span>
                        <span>2024/01/04</span>
                    </div>
                    <TotalPrice />
                    <div>
                        <Link href={'/Cart/Payment'}
                            className='btn bg-primary capitalize w-full btnText'>
                            {t("confirm")}
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default PaymentSection