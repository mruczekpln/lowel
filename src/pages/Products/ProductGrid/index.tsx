import { stagger, useAnimate } from 'framer-motion'
import { Reducer, useEffect, useReducer } from 'react'
import { sortingReducer } from '../../../reducers/sortingReducer'
import { Product, SortAction, SortType } from '../../../types'
import ProductCard from './ProductCard'
import SortBy from './SortBy'

interface ProductGridProps extends React.ComponentProps<'section'> {
  data: Product[]
}

const ProductGrid = ({ data }: ProductGridProps) => {
  const [sortedProducts, dispatch] = useReducer<Reducer<{ data: Product[] }, SortAction>>(
    sortingReducer,
    { data }
  )

  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate('main', { opacity: 1 }, { delay: stagger(0.15, { startDelay: 0.3 }) })
  }, [])

  const onSort = (type: SortType) => {
    dispatch({ type })
  }

  return (
    <>
      <SortBy onSort={onSort} />
      <section
        className='grid h-auto w-[1400px] grid-cols-[repeat(auto-fill,_400px)] place-content-center gap-16 2xl:w-full sm:grid-cols-[300px] sm:px-10'
        ref={scope}
      >
        {sortedProducts.data.map((item) => (
          <ProductCard
            key={item.id}
            itemId={item.id}
            title={item.name}
            description={item.desc}
            price={item.price}
            discountedPrice={item.discountedPrice}
          />
        ))}
      </section>
    </>
  )
}

export default ProductGrid
