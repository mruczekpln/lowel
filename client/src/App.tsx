import Navbar from './components/ui/Navbar'
import HomePage from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPage from './pages/About'
import ProductsPage from './pages/Products'
import CartPage from './pages/Cart'

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
