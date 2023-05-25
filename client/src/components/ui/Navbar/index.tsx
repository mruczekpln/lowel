import CartAnchor from './components/CartAnchor'
import NavbarElement from './components/Element'

export type Active = 'home' | 'about' | 'products' | 'cart'

interface NavbarProps extends React.ComponentProps<'div'> {
  active: Active
}

const Navbar = ({ active }: NavbarProps) => {
  return (
    <div className='w-full min-h-[128px] h-[128px] border-b-2 border-black  pl-8 justify-between flex items-center'>
      <h1 className='font-title w-min text-[64px] leading-none'>LOWEL</h1>
      <div className='w-max h-full flex items-center border-b-1 border-black'>
        <div className='h-full w-max flex items-center justify-between gap-16 pr-8'>
          <NavbarElement content='home' active={active} to='/'></NavbarElement>
          <NavbarElement content='about' active={active} to='/about'></NavbarElement>
          <NavbarElement content='products' active={active} to='/products'></NavbarElement>
        </div>
        <CartAnchor />
      </div>
    </div>
  )
}

export default Navbar
