import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, stagger, useAnimate } from 'framer-motion'
import React, { ChangeEvent } from 'react'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { ShippingType } from '..'
import Input from './Input'
import OrderButton from './OrderButton'

interface OrderFormProps extends React.ComponentProps<'div'> {
  updateShippingType: (type: ShippingType) => void
  submitToast: (data: FormValues) => boolean
}

export interface FormValues {
  firstName: string
  lastName: string
  regionProvince: string
  country: string
  adress: string
  postalCode: string
  phoneNumber: number
  shippingType: ShippingType
}

const OrderForm = ({ updateShippingType, submitToast }: OrderFormProps) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      'input, select',
      { x: [0, 4, 0] },
      { duration: 0.5, ease: 'easeInOut', delay: stagger(0.1, { startDelay: 0.5 }) }
    )
  }, [])

  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
    reset,
  } = useForm<FormValues>()
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(submitToast)
    if (!submitToast(data)) return
    return reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='min-w-[400px] h-max'>
      <div
        className='border-2 border-accent rounded-xl grid grid-cols-5 grid-rows-[repeat(4,64px)_12px_64px] gap-5 w-[400px] h-full p-5 relative'
        ref={scope}
      >
        {/* {errors && isSubmitted && (
          <div className='absolute inset-0'>{}</div>
        )} */}
        <Input
          placeholder='first name'
          label='firstName'
          className='col-span-2'
          register={register}
          minLength={4}
          errorOption={errors.firstName}
        ></Input>
        <Input
          placeholder='last name'
          label='lastName'
          className='col-span-3'
          register={register}
          required={true}
          minLength={5}
          // invalid={errors.lastName?.type === 'required'}
          errorOption={errors.lastName}
        ></Input>
        <Input
          placeholder='region / province'
          label='regionProvince'
          className='col-span-3'
          register={register}
          required={true}
          minLength={5}
          // invalid={errors.regionProvince?.type === 'required'}
          errorOption={errors.regionProvince}
        />
        <Input
          placeholder='country'
          label='country'
          className='col-span-2'
          register={register}
          required={true}
          minLength={5}
          // invalid={errors.country?.type === 'required'}
          errorOption={errors.country}
        />
        <Input
          placeholder='adress'
          label='adress'
          className='col-span-full'
          register={register}
          required={true}
          minLength={10}
          // invalid={errors.adress?.type === 'required'}
          errorOption={errors.adress}
        />
        <Input
          placeholder='postal code'
          label='postalCode'
          className='col-span-2'
          register={register}
          required={true}
          pattern={'^[0-9]{2}-[0-9]{3}'}
          // invalid={errors.postalCode?.type === 'required'}
          errorOption={errors.postalCode}
        />
        <Input
          placeholder='phone number'
          label='phoneNumber'
          className='col-span-3'
          register={register}
          required={true}
          minLength={9}
          maxLength={9}
          // invalid={errors.phoneNumber?.type === 'required'}
          errorOption={errors.phoneNumber}
        />
        <div className='col-span-full flex items-center'>
          <hr className='w-full' />
        </div>
        <motion.select
          id='shipping'
          className='col-span-full rounded-md pxr-4 appearance-none pl-4 relative background-image border-2 border-accent'
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1rem',
            backgroundPosition: 'right 1rem bottom 50%',
          }}
          {...register('shippingType')}
          defaultValue={1}
          onChange={(event: ChangeEvent<HTMLSelectElement>) =>
            updateShippingType(event.target.value as ShippingType)
          }
        >
          <option value='standard'>Standard Shipping - 4$</option>
          <option value='express'>Express Shipping - 10$</option>
          <FontAwesomeIcon icon={faArrowDown} className='absolute b-2 r-4' />
        </motion.select>
      </div>
      {/* <input type='submit' value='vac' /> */}
      <OrderButton />
    </form>
  )
}

export default React.memo(OrderForm)
