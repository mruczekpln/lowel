import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'

import ProductGrid from './components/ProductGrid'

const ProductsPage = () => {
  return (
    <div className='max-w-screen overflow-x-hidden w-screen h-screen font-main'>
      <main className='w-full h-auto flex flex-col overflow-hidden'>
        <Navbar active='products' />
        <div className='max-w-screen w-screen overflow-x-hidden flex flex-col items-center gap-16 py-16'>
          <h1 className='text-6xl font-bold'>All products</h1>
          <ProductGrid />
        </div>
      </main>
      <Footer type='grey'></Footer>
    </div>
  )
}

export default ProductsPage
