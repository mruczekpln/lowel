import { InCartItem, LocalStorageKeys } from '../types'

const getParsedState = (type: LocalStorageKeys) => {
  const rawState: string = localStorage.getItem(type) || '[]'
  return JSON.parse(rawState)
}

const deleteItem = (id: number) => {
  let parsedState: InCartItem[] = getCartItems()

  parsedState = parsedState.filter((item) => item.id !== id)

  localStorage.setItem(LocalStorageKeys.IN_CART, JSON.stringify(parsedState))
}

export const getCartItems = () => getParsedState(LocalStorageKeys.IN_CART)

export const isAlreadyLiked = (id: number) => getParsedState(LocalStorageKeys.LIKED).includes(id)

export const updateQuantity = (id: number, action: 'increment' | 'decrement') => {
  const parsedState: InCartItem[] = getCartItems()

  const index = parsedState.findIndex((item: InCartItem) => item.id === id)

  if (parsedState[index].quantity === 1 && action === 'decrement') return deleteItem(id)

  parsedState[index] = {
    id,
    quantity:
      action === 'increment' ? parsedState[index].quantity + 1 : parsedState[index].quantity - 1,
  }

  localStorage.setItem(LocalStorageKeys.IN_CART, JSON.stringify(parsedState))
}

export const addToCart = (id: number) => {
  const parsedState: InCartItem[] = getCartItems()

  const index = parsedState.findIndex((item: InCartItem) => item.id === id)

  if (index !== -1) updateQuantity(id, 'increment')
  else {
    parsedState.push({ id, quantity: 1 })
    localStorage.setItem(LocalStorageKeys.IN_CART, JSON.stringify(parsedState))
  }
}

export const addToLiked = (id: number) => {
  let parsedState: number[] = getParsedState(LocalStorageKeys.LIKED)

  const index = parsedState.findIndex((item: number) => item === id)

  if (index === -1) parsedState.push(id)
  else {
    parsedState = parsedState.filter((item) => item !== id)
  }

  localStorage.setItem(LocalStorageKeys.LIKED, JSON.stringify(parsedState))
}

export const clearCart = () => {
  localStorage.removeItem('in_cart')
}
