import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { getCartData } from '../../../api'
import { clearCart } from '../../../api/localStorage'
import { CartState, FormValues, ShippingType } from '../../../types'
import CartItems from './CartItems'
import OrderForm from './OrderForm'
import Summary from './Summary'

const OrderData = () => {
  const [isLoading, setIsLoading] = useState<boolean>()
  const [state, setState] = useState<CartState>(getCartData)

  const submitToast = ({ firstName, lastName, shippingType }: FormValues) => {
    if (state.cartItems.length === 0) {
      toast.error('you must put something in your cart first!')
      return false
    }

    const submitMessage = `thanks for your order! 🔥
    \n
    Order details!
    for: ${firstName ? firstName : '?'} ${lastName} by ${shippingType} 
    products: ${state.cartItems.map((item) => item.name)} 
    total cost: ${state.cartItems.reduce(
      (total, curr) => (total += curr.discountedPrice || curr.price * curr.quantity),
      0
    )}$ + shipping ${shippingType === 'standard' ? 4 : 10}$
    `
    console.log(submitMessage)

    toast(submitMessage, { position: 'bottom-right', duration: 10000 })

    clearCart()
    refreshItems()
    return true
  }

  const updateShippingType = (type: ShippingType) => setState(getCartData(type))

  const refreshItems = () => {
    setTimeout(() => {
      setIsLoading(true)
      setState(getCartData())
    }, 500)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <section className='flex gap-8 w-[1200px] h-max'>
      <AnimatePresence mode='wait'>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='flex flex-col gap-8 w-full h-max text-4xl'
            key={`${isLoading}`}
          >
            loading...
          </motion.div>
        ) : (
          <CartItems items={state.cartItems} refreshItems={refreshItems} key={`${isLoading}`} />
        )}
      </AnimatePresence>
      <div className='w-1 border-l-2 border-secondary'></div>
      <div className='flex flex-col gap-4 h-max'>
        <Summary state={state} />
        <hr className='border-secondary border-t-2 w-full' />
        <OrderForm submitToast={submitToast} updateShippingType={updateShippingType} />
      </div>
    </section>
  )
}

export default OrderData
