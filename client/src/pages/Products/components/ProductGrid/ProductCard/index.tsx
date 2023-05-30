import { AnimatePresence, motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import ProductCardActions from './Actions'
import ProductCardInfo from './Info'

interface ProductCardProps extends React.ComponentProps<'div'> {
  title: string
  description: string
  price: number
  discountedPrice?: number
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        className='min-w-[400px] w-full min-h-[650px] flex flex-col gap-8 font-main'
      >
        <div className='w-full h-[400px] bg-secondary group relative'>
          <div
            className='text-l text-accent rounded-xl opacity-0 group-hover:opacity-100 duration-200 cursor-pointer absolute left-3 bottom-2'
            onClick={(e) => alert(e.target)}
          >
            {props.description}
          </div>
        </div>
        <ProductCardInfo {...props} />
        <ProductCardActions />
      </motion.main>
    </AnimatePresence>
  )
}

export default ProductCard
