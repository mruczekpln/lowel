import { stagger, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { InCartItem } from '../../../../types/localStorage'
import { getCartItems } from '../../../../utils/localStorage'
import { Product } from '../../../Products'
import CartItem from './components/Item'

export interface ProductWithQuantity extends Product {
  quantity: number
}

type CartItemsProps = React.ComponentProps<'div'>

const fetchProductsWithQuantity = async () => {
  const res = await fetch('./src/data/products.json')
  const data: Product[] = await res.json()
  const inCart: InCartItem[] = getCartItems()

  // finding item references available in localstorage array
  // adding 'quantity' key to every object in data array by
  // finding index of inCart item with its id, which gives quantity of product of this id
  const updated = data
    .filter((item) => inCart.map((cartItem) => cartItem.id).includes(item.id))
    .map((item) => ({
      ...item,
      quantity: inCart[inCart.findIndex((inCartItem) => inCartItem.id === item.id)].quantity,
    }))

  return updated
}

const CartItems = (props: CartItemsProps) => {
  const [scope, animate] = useAnimate()

  const [items, setItems] = useState<ProductWithQuantity[]>([])

  const refreshItems = () => fetchProductsWithQuantity().then((data) => setItems(data))

  useEffect(() => {
    refreshItems()
  }, [])

  useEffect(() => {
    if (items.length > 0) {
      const toAnimate = document.querySelectorAll('#cart-item, #divider')
      animate(
        toAnimate,
        { opacity: 1 },
        { duration: 0.5, delay: stagger(0.15, { startDelay: 0.5 }) }
      )
    }
  }, [items])

  return (
    <div className='flex flex-col gap-8 w-full h-max' ref={scope}>
      {items.map((item, index) => (
        <>
          <CartItem data={item} key={index} refreshItems={refreshItems} />
          <hr className='last:hidden border-black border-t-2 opacity-0' id='divider' />
        </>
      ))}
    </div>
  )
}

export default CartItems
