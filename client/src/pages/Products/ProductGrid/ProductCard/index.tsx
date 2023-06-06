import { motion } from 'framer-motion'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { addToCart, addToLiked, isAlreadyLiked } from '../../../../utils/localStorage'
import ProductCardActions from './Actions'
import ProductCardInfo from './Info'

interface ProductCardProps extends React.ComponentProps<'div'> {
  itemId: number
  title: string
  description: string
  price: number
  discountedPrice?: number
}

const ProductCard = (props: ProductCardProps) => {
  const [liked, setLiked] = useState<boolean>(isAlreadyLiked(props.itemId))
  const onCartAdd = () => {
    addToCart(props.itemId)

    toast(`added ${props.title} to your cart!`, { icon: '🛒', position: 'bottom-left' })
  }

  const onLike = () => {
    addToLiked(props.itemId)

    setLiked((prev) => !prev)

    toast(`added ${props.title} to favorites!`, { icon: '💗', position: 'bottom-left' })
  }

  return (
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
      <ProductCardActions actions={{ addedToCart: onCartAdd, liked: onLike }} isLiked={liked} />
    </motion.main>
  )
}

export default ProductCard
