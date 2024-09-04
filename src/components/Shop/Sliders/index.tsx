import { ShopItem } from '@/root/types'
import SliderUi from '../../UI/SliderUi'


const ShopSliders = ({ data }: { data: ShopItem[] }) => {
    return (
        <>
        <SliderUi link='/Shop/category' req={data.filter(q=>q.category==="Beds")} title="ShopPage.category.Beds" type='Beds'/>
        <SliderUi link='/Shop/category' req={data.filter(q=>q.category==="Furnitures")} title="ShopPage.category.Furnitures" type='Furnitures'/>
        <SliderUi link='/Shop/category' req={data.filter(q=>q.category==="Treats")} title="ShopPage.category.Treats" type='Treats'/>
        <SliderUi link='/Shop/category' req={data.filter(q=>q.category==="Food")} title="ShopPage.category.Food" type='Food'/>
        <SliderUi link='/Shop/category' req={data.filter(q=>q.category==="Health")} title="ShopPage.category.Health" type='Health'/>
        <SliderUi link='/Shop/category' req={data.filter(q=>q.category==="Toys")} title="ShopPage.category.Toys" type='Toys'/>
        </>
    )
}

export default ShopSliders