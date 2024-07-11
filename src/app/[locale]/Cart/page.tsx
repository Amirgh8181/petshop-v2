import CartItems from '@/src/components/Cart/CartItems';
import ItemsHeader from '@/src/components/Cart/ItemsHeader';
import PaymentSection from '@/src/components/Cart/PaymentSection';
const Cart = () => {
  return (
    <div className='w-[90%] min-h-screen relative flex flex-col md:flex-row md:justify-between md:items-start items-center py-[13dvh]
    space-y-4 md:space-y-0'>
      <div className='md:w-3/4 w-full flex flex-col gap-4'>
        <ItemsHeader />
        <CartItems />
      </div>
      <PaymentSection />
    </div>
  )
}

export default Cart