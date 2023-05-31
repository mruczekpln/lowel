import { useAnimation, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface NavbarElementProps extends React.ComponentProps<'p'> {
  content: string
  to: string
  isActive?: boolean
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

const NavbarElement = ({ content, to, isActive = false }: NavbarElementProps) => {
  const isHovered = useAnimation()

  return isActive ? (
    <a href='#' className='font-main  text-[40px] font-bold'>
      {content}
    </a>
  ) : (
    <Link to={to}>
      <motion.span
        onHoverStart={() => isHovered.start('hover')}
        onHoverEnd={() => isHovered.start('idle')}
        onTapStart={() => isHovered.start('tap')}
        className='font-main text-[40px]  relative cursor-pointer flex flex-col items-center'
      >
        {content}
        <motion.hr
          className='border-black border-b-2 h-0 absolute bottom-0'
          initial='idle'
          variants={hrVariants}
          animate={isHovered}
        />
      </motion.span>
    </Link>
  )
}

export default NavbarElement
