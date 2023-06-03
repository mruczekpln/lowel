import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { ProductWithQuantity } from '..'
import deletedFromCartToast from '../../../../../components/toasts/deletedFromCart'
import { updateQuantity } from '../../../../../utils/localStorage'

interface CartItemProps extends React.ComponentProps<'div'> {
  data: ProductWithQuantity
  refreshItems: () => void
}

const CartItem = ({
  data: { id, name, price, discountedPrice, quantity: q },
  refreshItems,
}: CartItemProps) => {
  const [quantity, setQuantity] = useState<number>(q)
  const [scope, animate] = useAnimate()

  const onQuantityIncrement = () => {
    setQuantity((prev) => prev + 1)

    updateQuantity(id, 'increment')
  }

  const onQuantityDecrement = () => {
    setQuantity((prev) => prev - 1)

    updateQuantity(id, 'decrement')
  }

  useEffect(() => {
    if (quantity === 0) {
      toast.custom((t) => deletedFromCartToast(t, 'product'))
      animate(scope.current, { opacity: 0 }, { duration: 0.3 })
      setTimeout(() => refreshItems(), 300)
    }
  }, [quantity])

  return (
    <AnimatePresence>
      <motion.div
        className='w-full h-40 flex justify-between'
        initial={{ opacity: 0 }}
        id='cart-item'
        ref={scope}
      >
        <div className='flex gap-4 '>
          <div className='aspect-square bg-secondary h-full'></div>
          <div className='flex flex-col justify-between'>
            <div>
              <h1 className='font-title font-bold text-4xl'>{name}</h1>
              <p className='w-max'>Lorem ipsum dolor sit.</p>
            </div>
            <p className='text-3xl font-semibold'>{discountedPrice || price}</p>
          </div>
        </div>
        <div className='flex h-full items-center gap-4'>
          {quantity}
          <div
            className='w-14 aspect-square bg-secondary flex items-center justify-center'
            onClick={onQuantityIncrement}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div
            className='w-14 aspect-square border-2 border-black flex items-center justify-center'
            onClick={onQuantityDecrement}
          >
            <FontAwesomeIcon icon={faMinus} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default CartItem
