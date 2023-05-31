import ProductGrid from './components/ProductGrid'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../../components/layout/PageWrapper'

export interface Product {
  id: number
  name: string
  desc: string
  price: number
  discountedPrice?: number
}

const fetchProducts = async () => {
  const res = await fetch('./src/data/products.json')
  const data = await res.json()

  return data
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchProducts().then((data) => setProducts(data))
  }, [])

  return (
    <PageWrapper active='products'>
      <motion.div
        className='max-w-screen w-screen h-auto overflow-x-hidden py-16 flex flex-col items-center gap-16'
        initial={{ opacity: 0 }}
        animate={{ opacity: '100%', transition: { duration: 0.5, delay: 0.2 } }}
      >
        <h1 className='text-6xl font-bold'>All products</h1>
        {products.length > 0 && <ProductGrid data={products} />}
      </motion.div>
    </PageWrapper>
  )
}

export default ProductsPage
