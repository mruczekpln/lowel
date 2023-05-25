import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'
import CartItems from './components/CartItems'
import OrderForm from './components/OrderForm'

const CartPage = () => {
  return (
    <div className='max-w-screen w-screen h-screen overflow-x-hidden font-main'>
      <main className='w-full h-auto flex flex-col overflow-hidden font-main max-w-screen '>
        <Navbar active='products' />
        <div className='max-w-screen w-screen overflow-x-hidden flex flex-col items-center gap-16 py-16'>
          <h1 className='text-6xl font-bold'>Your Cart</h1>
          <section className='flex gap-8 w-[1200px] h-max'>
            <CartItems />
            <div className='w-1 border-l-2 border-secondary'></div>
            <OrderForm />
          </section>
        </div>
      </main>
      <Footer type='grey'></Footer>
    </div>
  )
}

export default CartPage
