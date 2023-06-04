import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, stagger, useAnimate } from 'framer-motion'
import React from 'react'
import { useEffect } from 'react'
import { ShippingType } from '..'
import Input from './components/Input'
import OrderButton from './components/OrderButton'

interface OrderFormProps extends React.ComponentProps<'div'> {
  updateShippingType: (type: ShippingType) => void
}

const OrderForm = ({ updateShippingType }: OrderFormProps) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      'input, select',
      { x: [0, 4, 0] },
      { duration: 0.5, ease: 'easeInOut', delay: stagger(0.1, { startDelay: 0.5 }) }
    )
  }, [])

  return (
    <div className='min-w-[400px] h-max'>
      <form
        className='border-2 border-accent rounded-xl grid grid-cols-5 grid-rows-[repeat(5,_64px)]   gap-4 w-[400px] h-full p-4'
        ref={scope}
      >
        <Input placeholder='first name' className='col-span-2'></Input>
        <Input placeholder='last name' className='col-span-3'></Input>
        <Input placeholder='region / province' className='col-span-3' />
        <Input placeholder='country' className='col-span-2' />
        <Input placeholder='adress' className='col-span-full' />
        <Input placeholder='postal code' className='col-span-2' />
        <Input placeholder='number' className='col-span-3' />
        <motion.select
          name='shipping'
          id='shipping'
          className='col-span-full rounded-md pxr-4 appearance-none pl-4 relative background-image border-2 border-accent'
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1rem',
            backgroundPosition: 'right 1rem bottom 50%',
          }}
          defaultValue={1}
          onChange={(event: any) => updateShippingType(event.target.value)}
        >
          <option value='standard'>Standard Shipping - 4$</option>
          <option value='express'>Express Shipping - 10$</option>
          <FontAwesomeIcon icon={faArrowDown} className='absolute b-2 r-4' />
        </motion.select>
      </form>
      <OrderButton />
    </div>
  )
}

export default React.memo(OrderForm)
