import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { updateQuantity } from '../../../../api/localStorage'
import { Item } from '../../../../types'

interface CartItemProps extends React.ComponentProps<'div'> {
  data: Item
  refreshItems: () => void
}

const CartItem = ({
  data: { id, name, price, discountedPrice, quantity },
  refreshItems,
}: CartItemProps) => {
  const onQuantityIncrement = () => {
    updateQuantity(id, 'increment')
    refreshItems()
  }

  const onQuantityDecrement = () => {
    updateQuantity(id, 'decrement')

    if (quantity === 1) {
      setTimeout(toast(`deleted ${name} from your cart.`, { icon: '🗑️' }), 500)
    }

    refreshItems()
  }

  return (
    <motion.div
      className='flex h-40 w-full justify-between sm:h-24'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      id='cart-item'
    >
      <div className='flex gap-4 '>
        <div className='aspect-square h-full bg-secondary'></div>
        <div className='flex flex-col justify-between'>
          <div>
            <h1 className='font-title text-4xl font-bold sm:text-2xl'>{name}</h1>
            <p className='w-max sm:text-xs'>Lorem ipsum dolor sit.</p>
          </div>
          <p className='text-3xl font-semibold'>{discountedPrice || price}</p>
        </div>
      </div>
      <div className='flex h-full items-center gap-4 sm:flex-col'>
        <>
          {quantity}
          <div
            className='flex aspect-square w-14 items-center justify-center bg-secondary sm:w-8'
            onClick={onQuantityIncrement}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div
            className='flex aspect-square w-14 items-center justify-center border-2 border-black sm:w-8'
            onClick={onQuantityDecrement}
          >
            <FontAwesomeIcon icon={faMinus} />
          </div>
        </>
      </div>
    </motion.div>
  )
}

export default CartItem
