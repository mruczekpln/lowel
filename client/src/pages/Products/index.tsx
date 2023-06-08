import { motion } from 'framer-motion'
import PageWrapper from '../../components/layout/PageWrapper'
import { products } from '../../data'
import ProductGrid from './ProductGrid'

const ProductsPage = () => {
  const productList = products

  return (
    <PageWrapper>
      <motion.div
        className='max-w-screen w-screen h-auto overflow-x-hidden py-16 flex flex-col items-center gap-16'
        initial={{ opacity: 0 }}
        animate={{ opacity: '100%', transition: { duration: 0.5, delay: 0.2 } }}
      >
        <h1 className='text-6xl font-bold'>All products</h1>
        {productList.length > 0 && <ProductGrid data={productList} />}
      </motion.div>
    </PageWrapper>
  )
}

export default ProductsPage
