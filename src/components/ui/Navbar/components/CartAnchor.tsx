import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

type CartAnchorProps = React.ComponentProps<'div'>

const CartAnchor = (props: CartAnchorProps) => {
  const navigate = useNavigate()

  return (
    <div className='flex h-full max-h-32 w-32 items-center justify-center border-l-2 border-black bg-secondary md:w-20'>
      <FontAwesomeIcon
        fixedWidth
        icon={faCartShopping}
        className='aspect-square scale-[3] cursor-pointer md:scale-150'
        onClick={() => navigate('/cart')}
      />
    </div>
  )
}

export default CartAnchor
