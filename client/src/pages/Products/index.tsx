import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

interface ProductCardProps extends React.ComponentProps<'div'> {
  title: string
  description: string
  price: number
  discountedPrice?: number
}

const ProductCard = ({ title, description, price, discountedPrice = 0 }: ProductCardProps) => {
  return (
    <div className='w-full h-[700px] flex flex-col gap-8 font-main'>
      <div className='w-full grid place-items-center h-[400px] bg-secondary group'>
        <div
          className='p-4 bg-white text-xl text-accent rounded-xl opacity-0 group-hover:opacity-100 duration-200 cursor-pointer'
          onClick={(e) => alert(e.target)}
        >
          see more
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='w-full flex flex-col gap-4'>
          <h1 className='font-bold font-title text-4xl'>{title}</h1>
          <p className='text-[15px]'>
            {description}... <b>Read More</b>
          </p>
        </div>
        <div className='flex flex-col items-end '>
          {discountedPrice ? (
            <>
              <h2 className='italic font-semibold text-3xl'>{discountedPrice}$</h2>
              <h2 className='italic text-secondary line-through font-semibold text-xl'>{price}$</h2>
            </>
          ) : (
            <h2 className='italic font-semibold text-3xl'>{price}$</h2>
          )}
        </div>
      </div>
      <div className='cursor-pointer flex h-16 bg-gradient-to-r from-secondary to-white items-center justify-between '>
        <div className='group/addcart w-full h-16 flex items-center'>
          <p className='text-xl pl-6 leading-none font-bold group-hover/addcart:pl-8 duration-300 w-full'>
            add to cart
          </p>
        </div>
        <div className='h-full w-16 bg-accent flex items-center justify-center group/heart'>
          <FontAwesomeIcon
            icon={faHeart}
            color='white'
            size='2x'
            className='group-hover/heart:scale-110 duration-200'
          />
        </div>
      </div>
    </div>
  )
}

const sortingChoices = ['featured', 'price asc', 'price desc', 'name'] as const

type Active = (typeof sortingChoices)[number]

const SortBy = () => {
  const [active, setActive] = useState<Active>('featured')

  return (
    <div className='flex gap-4 text-2xl col-span-3 w-full relative'>
      <p className=''>sort by:</p>
      <div className='flex gap-8 font-bold'>
        {sortingChoices.map((item, index) => (
          <p className='relative cursor-pointer' key={index} onClick={() => setActive(item)}>
            {item}
            {active === item && (
              <motion.div
                layoutId='underline'
                className='absolute inset-0 border-b-2 border-black'
              ></motion.div>
            )}
          </p>
        ))}
      </div>
    </div>
  )
}

const ProductsPage = () => {
  return (
    <div className='max-w-screen overflow-x-hidden w-screen h-screen font-main'>
      <main className='w-full h-auto flex flex-col overflow-hidden'>
        <Navbar active='products' />
        <div className='max-w-screen w-screen overflow-x-hidden flex flex-col items-center gap-16 py-16'>
          <h1 className='text-6xl font-bold'>All products</h1>
          <section className='grid grid-cols-[repeat(3,_400px)] justify-items-center gap-16'>
            <SortBy />
            {[...Array(10)].map((item, index) => (
              <ProductCard
                key={index}
                title={`product${index}`}
                description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, accusamus!'
                price={49.99}
              />
            ))}
          </section>
        </div>
      </main>
      <Footer type='grey'></Footer>
    </div>
  )
}

export default ProductsPage
