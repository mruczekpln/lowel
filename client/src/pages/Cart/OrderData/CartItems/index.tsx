import { motion, stagger, useAnimate } from 'framer-motion'
import React from 'react'
import { useEffect } from 'react'
import { Item } from '../../../../types'
import CartItem from './Item'

interface CartItemsProps extends React.ComponentProps<'div'> {
  items: Item[]
  refreshItems: () => void
}

const CartItems = ({ items, refreshItems }: CartItemsProps) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    if (items.length > 0) {
      // if (refreshedItems.length > 0) {
      const toAnimate = document.querySelectorAll('#cart-item, #divider')
      animate(
        toAnimate,
        { opacity: 1 },
        { duration: 0.5, delay: stagger(0.15, { startDelay: 0.5 }) }
      )
    }
  }, [items])

  console.log('cart items refresh', items)

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className='flex h-max w-full flex-col items-center gap-8'
      ref={scope}
    >
      {items.length > 0 ? (
        // <AnimatePresence>
        items.map((item) => (
          <>
            <CartItem data={item} key={item.name} refreshItems={refreshItems} />
            <hr className='border-t-2 border-black opacity-0 last:hidden' id='divider' />
          </>
        ))
      ) : (
        // </AnimatePresence>
        <h1 className='h-32 w-max text-2xl md:text-[4vw]'>
          no items in your cart, go buy something...
        </h1>
      )}
    </motion.div>
  )
}

export default CartItems
