import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

type CartItemProps = React.ComponentProps<'div'>

const CartItem = (props: CartItemProps) => {
  const [quantity, setQuantity] = useState<number>(1)

  useEffect(() => {
    if (quantity === 0) alert('deleted')
  }, [quantity])

  return (
    <div className='w-full h-40 flex justify-between opacity-0' id='cart-item'>
      <div className='flex gap-4 '>
        <div className='aspect-square bg-secondary h-full'></div>
        <div className='flex flex-col justify-between'>
          <div>
            <h1 className='font-title font-bold text-4xl'>Product</h1>
            <p className='w-max'>Lorem ipsum dolor sit.</p>
          </div>
          <p className='text-3xl font-semibold'>49.99$</p>
        </div>
      </div>
      <div className='flex h-full items-center gap-4'>
        {quantity}
        <div
          className='w-14 aspect-square bg-secondary flex items-center justify-center'
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
        <div
          className='w-14 aspect-square border-2 border-black flex items-center justify-center'
          onClick={() => setQuantity((prev) => prev - 1)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </div>
      </div>
    </div>
  )
}

export default CartItem
