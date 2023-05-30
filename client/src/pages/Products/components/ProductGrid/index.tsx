import { stagger, useAnimate } from 'framer-motion'
import { useState, useEffect, useReducer, Reducer } from 'react'
import { Product } from '../..'
import ProductCard from './ProductCard'
import SortBy from './SortBy'

interface ProductGridProps extends React.ComponentProps<'section'> {
  data: Product[]
}

export enum SortType {
  PRICE_ASC = 'price_asc',
  PRICE_DESC = 'price_desc',
  FEATURED = 'featured',
  NAME = 'name',
}

interface SortAction {
  type: SortType
  payload?: Product[]
}

function sortingReducer(state: { data: Product[] }, action: SortAction) {
  console.log(action)

  switch (action.type) {
    case SortType.FEATURED:
      return state
    case SortType.NAME: {
      const toSort = state.data
      toSort.sort((a, b) => a.name.localeCompare(b.name))

      return { ...state, data: toSort }
    }
    case SortType.PRICE_ASC: {
      const toSort = state.data
      toSort.sort((a, b) =>
        (a.discountedPrice || a.price) > (b.discountedPrice || b.price) ? 1 : -1
      )

      return { ...state, data: toSort }
    }
    case SortType.PRICE_DESC: {
      const toSort = state.data
      toSort.sort((a, b) =>
        (b.discountedPrice || b.price) > (a.discountedPrice || a.price) ? 1 : -1
      )

      return { ...state, data: toSort }
    }
    default:
      return state
  }
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
