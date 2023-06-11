import { motion } from 'framer-motion'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { addToCart, addToLiked, isAlreadyLiked } from '../../../../api/localStorage'
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
      className='flex min-h-[650px] w-full max-w-[400px] flex-col gap-8 place-self-center font-main sm:h-auto sm:min-h-[400px]'
    >
      <div className='group relative aspect-square h-[400px] bg-secondary sm:h-[300px] sm:w-[300px]'>
        <div
          className='text-l absolute bottom-2 left-3 cursor-pointer rounded-xl text-accent opacity-0 duration-200 group-hover:opacity-100'
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
