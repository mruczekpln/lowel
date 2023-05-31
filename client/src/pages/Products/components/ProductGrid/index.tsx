import { stagger, useAnimate } from 'framer-motion'
import { Reducer, useEffect, useReducer } from 'react'
import { Product } from '../..'
import { sortingReducer } from '../../../../reducers/sortingReducer'
import { SortAction, SortType } from '../../../../types/sort'
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

  useEffect(() => {
    console.log('sorted', sortedProducts)
  }, [sortedProducts])

  const onSort = (type: SortType) => {
    dispatch({ type })
  }

  return (
    <>
      <SortBy onSort={onSort} />
      <section
        className='grid max-w-[1400px] h-auto grid-cols-[repeat(auto-fill,_400px)] gap-16'
        ref={scope}
      >
        {sortedProducts.data.map((item) => (
          <ProductCard
            key={item.id}
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
