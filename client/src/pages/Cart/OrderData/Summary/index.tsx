import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { ProductWithQuantity, ShippingType } from '..'
import SummaryRow from './Row'

interface SummaryProps extends React.ComponentProps<'div'> {
  items: ProductWithQuantity[]
  shippingType: ShippingType
}

export interface SummaryData {
  name: string
  price: number
  quantity: number
  totalPrice: number
}

const getSummaryData = (items: ProductWithQuantity[], shippingPrice: number) => {
  const data: SummaryData[] = items.map((item) => ({
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    totalPrice: item.price * item.quantity,
  }))

  const finalPrice = data.reduce((total, curr) => (total += curr.totalPrice), 0) + shippingPrice

  return {
    data,
    finalPrice,
  }
}

const Summary = ({ items, shippingType }: SummaryProps) => {
  const shippingData =
    shippingType === 'standard'
      ? { name: 'Standard shipping', price: 4 }
      : { name: 'Express shipping', price: 10 }

  const summaryData = getSummaryData(items, shippingData.price)

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center text-2xl mb-2'>
        <h1 className='font-bold text-3xl font-title'>SUMARRY</h1>
        <p>{summaryData.finalPrice.toFixed(2)}$</p>
      </div>
      {items && (
        <AnimatePresence>
          {summaryData.data.map((item, index) => (
            <SummaryRow data={item} key={index} />
          ))}
        </AnimatePresence>
      )}
      <hr className='my-4' />
      <div className='w-full flex justify-between'>
        {shippingType === 'standard' ? (
          <>
            <b>Standard shipping</b>
            <p>4$</p>
          </>
        ) : (
          <>
            <b>Express shipping</b>
            <p>10$</p>
          </>
        )}
      </div>
    </div>
  )
}

export default Summary
