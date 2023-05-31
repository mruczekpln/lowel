import { Product } from '../pages/Products'

export enum SortType {
  PRICE_ASC = 'price_asc',
  PRICE_DESC = 'price_desc',
  FEATURED = 'featured',
  NAME = 'name',
}

export interface SortAction {
  type: SortType
  payload?: Product[]
}
