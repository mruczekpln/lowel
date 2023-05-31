import { useLocation } from 'react-router-dom'
import CartAnchor from './components/CartAnchor'
import NavbarElement from './components/Element'

const pages = {
  '/': 'home',
  '/about': 'about',
  '/products': 'products',
  '/cart': 'cart',
}
type NavbarProps = React.ComponentProps<'div'>

const Navbar = (props: NavbarProps) => {
  const location = useLocation()

  return (
    <div className='w-full min-h-[128px] h-[128px] border-b-2 border-black  pl-8 justify-between flex items-center'>
      <h1 className='font-title w-min text-[64px] leading-none'>LOWEL</h1>
      <div className='w-max h-full flex items-center border-b-1 border-black'>
        <div className='h-full w-max flex items-center justify-between gap-16 pr-8'>
          {Object.keys(pages)
            .slice(0, 3)
            .map((item, index) => (
              <NavbarElement
                key={index}
                content={pages[item as keyof typeof pages]}
                to={item}
                isActive={location.pathname === item}
              />
            ))}
        </div>
        <CartAnchor />
      </div>
    </div>
  )
}

export default Navbar
