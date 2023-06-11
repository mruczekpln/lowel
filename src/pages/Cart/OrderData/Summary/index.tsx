import { AnimatePresence } from 'framer-motion'
import { CartState } from '../../../../types'
import SummaryRow from './Row'

interface SummaryProps extends React.ComponentProps<'div'> {
  state: CartState
}

const Summary = ({ state: { cartItems, shippingType, finalPrice } }: SummaryProps) => {
  const shippingData =
    shippingType === 'standard'
      ? { name: 'Standard shipping', price: 4 }
      : { name: 'Express shipping', price: 10 }

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center text-2xl mb-2'>
        <h1 className='font-bold text-3xl font-title'>SUMARRY</h1>
        <p>{finalPrice.toFixed(2)}$</p>
      </div>
      {cartItems && (
        <AnimatePresence>
          {cartItems.map((item, index) => (
            <SummaryRow data={item} key={index} />
          ))}
        </AnimatePresence>
      )}
      <hr className='my-4' />
      <div className='w-full flex justify-between'>
        <b>{shippingData.name}</b>
        <p>{shippingData.price}</p>
      </div>
    </div>
  )
}

export default Summary
