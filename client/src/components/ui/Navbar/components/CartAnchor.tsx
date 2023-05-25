import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

type CartAnchorProps = React.ComponentProps<'div'>

const CartAnchor = (props: CartAnchorProps) => {
  const navigate = useNavigate()

  return (
    <div className='max-h-32 h-full w-32 bg-secondary border-l-2 border-black flex items-center justify-center'>
      <FontAwesomeIcon
        icon={faCartShopping}
        size='3x'
        className='cursor-pointer'
        onClick={() => navigate('/cart')}
      />
    </div>
  )
}

export default CartAnchor
