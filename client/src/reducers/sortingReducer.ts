import { Product } from '../pages/Products'
import { SortAction, SortType } from '../types/sort'

export function sortingReducer(state: { data: Product[] }, action: SortAction) {
  console.log(action, state)

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
