"use client"
import TranslateAnimation from '@/src/components/UI/Animation/TranslateAnimation'
import CardUi from '@/src/components/UI/Card'
import { useFavoriteList } from '@/src/stores/ShopStroes/useFavoriteList'
import { IoClose } from 'react-icons/io5'

const FavoriteList = () => {
  const { FavoriteList, setFavoriteList } = useFavoriteList()



  return (
    <>
      {FavoriteList.length > 0
        ?
        <div className='md:py-[6vmax] py-[10vmax] w-full min-h-screen space-y-[3vmax]'>
          <h1 className='text-5xl text-start p-4 capitalize w-full'>my favorites</h1>
          <TranslateAnimation
            childClass='grid md:grid-cols-4 grid-cols-1 px-8 gap-8'
            once
            yVal={60}
            delay={1}
          >
            {
              FavoriteList.map(item =>
                <div className='w-full h-full relative'>
                  <div
                    className='group absolute text-3xl top-2 md:right-[2vmax] right-[4vmax] z-10 cursor-pointer tooltip'
                    data-tip="remove"
                    onClick={() => setFavoriteList(item)}
                  >
                    <IoClose className='group-hover:rotate-90 group-hover:text-red-500 transition-all duration-300' />
                  </div>
                  <CardUi product={item} btnTxt='Show More' />
                </div>
              )
            }
          </TranslateAnimation>
        </div>
        :
        <div className='w-full h-screen flex items-center justify-center'>
          <div className='text-3xl'>no anything to show you</div>
        </div>
      }
    </>
  )
}

export default FavoriteList