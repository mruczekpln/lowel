import CartItem from './components/Item'

type CartItemsProps = React.ComponentProps<'div'>

const CartItems = (props: CartItemsProps) => {
  return (
    <div className='flex flex-col gap-8 w-full h-max'>
      {[...Array(5)].map((item, index) => (
        <>
          <CartItem key={index} />
          <hr className='last:hidden border-black border-t-2' />
        </>
      ))}
    </div>
  )
}

export default CartItems
