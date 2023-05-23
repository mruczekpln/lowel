import HomePage from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPage from './pages/About'
import ProductsPage from './pages/Products'
import CartPage from './pages/Cart'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/products',
    element: <ProductsPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
