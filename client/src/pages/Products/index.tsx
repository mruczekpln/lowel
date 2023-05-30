import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'

import ProductGrid from './components/ProductGrid'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export interface Product {
  id: number
  name: string
  desc: string
  price: number
  discountedPrice?: number
}
interface ProductsState {
  data: Product[]
  isLoading: boolean
}

const fetchProducts = async () => {
  const res = await fetch('./src/data/products.json')
  const data = await res.json()

  return data
}

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductsState>({ data: [], isLoading: true })

  useEffect(() => {
    fetchProducts().then((data) => setProducts({ data, isLoading: false }))
  }, [])

  return (
    <div className='max-w-screen overflow-x-hidden w-screen h-screen font-main'>
      <main className='w-full min-h-screen h-auto flex flex-col overflow-hidden'>
        <Navbar active='products' />
        <motion.div
          className='max-w-screen w-screen h-auto overflow-x-hidden py-16 flex flex-col items-center gap-16'
          initial={{ opacity: 0 }}
          animate={{ opacity: '100%', transition: { duration: 0.5 } }}
        >
          <h1 className='text-6xl font-bold'>All products</h1>
          {products.isLoading ? <p>loading...</p> : <ProductGrid data={products.data} />}
        </motion.div>
      </main>
      <Footer type='grey'></Footer>
    </div>
  )
}

export default ProductsPage
