import PageWrapper from '../../components/layout/PageWrapper'
import { motion } from 'framer-motion'
import OrderData from './components/OrderData'

const CartPage = () => {
  return (
    <PageWrapper active='cart'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: '100%', transition: { duration: 1, delay: 0.2 } }}
        className='max-w-screen h-max w-screen overflow-x-hidden flex flex-col items-center gap-12 py-12'
      >
        <h1 className='text-6xl font-bold'>Your Cart</h1>
        <OrderData />
      </motion.div>
    </PageWrapper>
  )
}

export default CartPage
