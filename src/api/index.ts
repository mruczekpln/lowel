import { ShippingType, InCartItem } from '../types'
import { products } from './../data/index'
import { getCartItems } from './localStorage'

export const getCartData = (shippingType: ShippingType = 'standard') => {
  const productList = products
  const inCart: InCartItem[] = getCartItems()

  const cartItems = inCart.map((item) => {
    const productById = productList[productList.findIndex((j) => j.id === item.id)]

    return {
      ...productById,
      quantity: item.quantity,
      totalPrice: item.quantity * (productById?.discountedPrice || productById?.price),
    }
  })

  const shippingPrice = shippingType === 'standard' ? 4 : 10
  const finalPrice =
    cartItems.reduce((total, curr) => (total += curr.totalPrice), 0) + shippingPrice

  return {
    cartItems,
    shippingType,
    finalPrice,
  }
}
