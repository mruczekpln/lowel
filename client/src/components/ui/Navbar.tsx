import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'

type Active = 'home' | 'about' | 'products' | 'track your order'
interface NavbarElementProps extends React.ComponentProps<'p'> {
  content: string
  to: string
  active: Active
}

const hrVariants = {
  idle: {
    width: 0,
    x: 0,
    opacity: 1,
    padding: 0,
  },
  hover: {
    width: '80%',
  },
  tap: {
    opacity: 0,
  },
}

const NavbarElement = ({ content, to, active }: NavbarElementProps) => {
  const isHovered = useAnimation()
  const isActive = active === content

  return isActive ? (
    <a href='#' className='font-main text-[40px] font-bold'>
      {content}
    </a>
  ) : (
    <Link to={to}>
      <motion.a
        onHoverStart={() => isHovered.start('hover')}
        onHoverEnd={() => isHovered.start('idle')}
        onTapStart={() => isHovered.start('tap')}
        className='font-main text-[40px] relative cursor-pointer flex flex-col items-center'
      >
        {content}
        <motion.hr
          className='border-black border-b-2 h-0 absolute bottom-0'
          initial='idle'
          variants={hrVariants}
          animate={isHovered}
        />
      </motion.a>
    </Link>
  )
}

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
        <div className='max-h-32 h-full w-32 bg-secondary border-l-2 border-black flex items-center justify-center'>
          <FontAwesomeIcon icon={faCartShopping} size='3x' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
