import ProductCard from './ProductCard'
import SortBy from './SortBy'

type ProductGridProps = React.ComponentProps<'section'>

const ProductGrid = () => {
  return (
    <section className='grid grid-cols-[repeat(3,_400px)] justify-items-center gap-16'>
      <SortBy />
      {[...Array(10)].map((item, index) => (
        <ProductCard
          key={index}
          title={`product${index}`}
          description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, accusamus!'
          price={49.99}
        />
      ))}
    </section>
  )
}

export default ProductGrid
