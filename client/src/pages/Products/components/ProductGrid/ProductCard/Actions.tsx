import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import toast from 'react-hot-toast'

interface ProductCardActionsProps extends React.ComponentProps<'div'> {
  actions: {
    addedToCart: () => void
    liked: () => void
  }
  isLiked: boolean
}

const ProductCardActions = (props: ProductCardActionsProps) => {
  return (
    <div className='cursor-pointer flex h-16 bg-gradient-to-r from-secondary to-white items-center justify-between '>
      <div
        className='group/addcart w-full h-16 flex items-center'
        onClick={props.actions.addedToCart}
      >
        <p className='text-xl pl-6 leading-none font-bold group-hover/addcart:pl-8 duration-300 w-full'>
          add to cart
        </p>
      </div>
      <div
        className='h-full w-16 bg-accent flex items-center justify-center group/heart'
        onClick={props.actions.liked}
      >
        <FontAwesomeIcon
          icon={faHeart}
          color={props.isLiked ? 'red' : 'white'}
          size='2x'
          className='group-hover/heart:scale-110 duration-200'
        />
      </div>
    </div>
  )
}

export default ProductCardActions
