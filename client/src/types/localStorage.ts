export enum LocalStorageKeys {
  IN_CART = 'in_cart',
  LIKED = 'liked',
}

export interface InCartItem {
  id: number
  quantity: number
}
