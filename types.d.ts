import { AuthInput } from '@/types';
export interface ShopItem {
  _id: string,
  name: string,
  category: string,
  price: string,
  shortDescription: string,
  description: string,
  attachmentFile: string,
  createdAt: string,
  updatedAt: string,
  __v: number
}
export interface CartItem extends ShopItem {
  count: number
}



