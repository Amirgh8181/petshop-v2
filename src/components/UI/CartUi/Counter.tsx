"use client"
import { useCartItems } from "@/src/stores/ShopStroes/useCartItem";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";

const CartCounter = ({ id, count }: { id: string, count: number }) => {
    const { setIncrement, setDecrement } = useCartItems()
    return (

        <div className='flex items-center justify-around p-1'>
            <div onClick={() => setDecrement(id)}
                className='md:text-3xl sm:text-lg text-base hover:bg-primary hover:text-white transition-all
                        duration-400 rounded-md cursor-pointer'>
                <CiSquareMinus />
            </div>
            <div className='md:text-2xl sm:text-base text-xs mx-2'>{count}</div>
            <div onClick={() => setIncrement(id)}
                className='md:text-3xl sm:text-lg text-base hover:bg-primary hover:text-white transition-all 
                        duration-400 rounded-md cursor-pointer'>
                <CiSquarePlus />
            </div>
        </div>
    )
}

export default CartCounter