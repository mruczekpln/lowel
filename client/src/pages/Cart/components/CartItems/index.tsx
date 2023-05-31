import { stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import CartItem from './components/Item'

type CartItemsProps = React.ComponentProps<'div'>

const CartItems = (props: CartItemsProps) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    const toAnimate = document.querySelectorAll('#cart-item, #divider')
    console.log(Array.from(toAnimate))

    animate(toAnimate, { opacity: 1 }, { duration: 0.5, delay: stagger(0.15, { startDelay: 0.5 }) })
  }, [])

  return (
    <div className='flex flex-col gap-8 w-full h-max' ref={scope}>
      {[...Array(5)].map((item, index) => (
        <>
          <CartItem key={index} />
          <hr className='last:hidden border-black border-t-2 opacity-0' id='divider' />
        </>
      ))}
    </div>
  )
}

export default CartItems
