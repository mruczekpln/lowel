import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ProductCardActionsProps extends React.ComponentProps<'div'> {
  actions: {
    addedToCart: () => void
    liked: () => void
  }
  isLiked: boolean
}

const ProductCardActions = (props: ProductCardActionsProps) => {
  return (
    <div className='flex h-16 cursor-pointer items-center justify-between bg-gradient-to-r from-secondary to-white '>
      <div
        className='group/addcart flex h-16 w-full items-center'
        onClick={props.actions.addedToCart}
      >
        <p className='w-full pl-6 text-xl font-bold leading-none duration-300 group-hover/addcart:pl-8'>
          add to cart
        </p>
      </div>
      <div
        className='group/heart flex h-full w-16 items-center justify-center bg-accent'
        onClick={props.actions.liked}
      >
        <FontAwesomeIcon
          icon={faHeart}
          color={props.isLiked ? 'red' : 'white'}
          size='2x'
          className='duration-200 group-hover/heart:scale-110'
        />
      </div>
    </div>
  )
}

export default ProductCardActions
