import { faBurger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useVelocity,
} from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
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
    <div className='max-w-screen z-50 flex h-[128px] w-screen items-center justify-between border-b-2 border-black bg-white pl-8 md:h-20'>
      <h1 className='w-min font-title text-[64px] leading-none sm:text-4xl'>LOWEL</h1>
      <div className='border-b-1 flex h-full w-max items-center border-black'>
        <div className='flex h-full w-max items-center justify-between gap-16 pr-8 lg:gap-8 md:gap-4'>
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
          <a href='#footer-links' className='hidden sm:block'>
            <FontAwesomeIcon icon={faBurger} className='z-[100]  scale-[2]' fixedWidth />
          </a>
        </div>
        <CartAnchor />
      </div>
    </div>
  )
}

export default Navbar
