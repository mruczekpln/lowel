import CartItems from './components/CartItems'
import OrderForm from './components/OrderForm'
import PageWrapper from '../../components/layout/PageWrapper'
import { motion } from 'framer-motion'

const CartPage = () => {
  return (
    <PageWrapper active='cart'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: '100%', transition: { duration: 1, delay: 0.2 } }}
        className='max-w-screen h-max w-screen overflow-x-hidden flex flex-col items-center gap-16 py-16'
      >
        <h1 className='text-6xl font-bold'>Your Cart</h1>
        <section className='flex gap-8 w-[1200px] h-max'>
          <CartItems />
          <div className='w-1 border-l-2 border-secondary'></div>
          <OrderForm />
        </section>
      </motion.div>
    </PageWrapper>
  )
}

export default CartPage
