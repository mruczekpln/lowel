export type ShippingType = 'standard' | 'express'

export interface Item extends Product {
  quantity: number
  totalPrice: number
}

export interface CartState {
  cartItems: Item[]
  finalPrice: number
  shippingType: ShippingType
}

export enum LocalStorageKeys {
  IN_CART = 'in_cart',
  LIKED = 'liked',
}

export interface InCartItem {
  id: number
  quantity: number
}

export interface Product {
  id: number
  name: string
  desc: string
  price: number
  discountedPrice?: number
}

export enum SortType {
  PRICE_ASC = 'price_asc',
  PRICE_DESC = 'price_desc',
  FEATURED = 'featured',
  NAME = 'name',
}

export interface SortAction {
  type: SortType
  payload?: Product[]
}

export interface SummaryData {
  name: string
  price: number
  quantity: number
  totalPrice: number
}

export interface FormValues {
  firstName: string
  lastName: string
  regionProvince: string
  country: string
  adress: string
  postalCode: string
  phoneNumber: number
  shippingType: ShippingType
}
