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
    <a href='#' className={`font-main  text-[40px] font-bold lg:text-3xl md:text-2xl sm:hidden`}>
      {content}
    </a>
  ) : (
    <Link to={to}>
      <motion.span
        onHoverStart={() => isHovered.start('hover')}
        onHoverEnd={() => isHovered.start('idle')}
        onTapStart={() => isHovered.start('tap')}
        className={`relative flex cursor-pointer flex-col items-center font-main text-[40px] lg:text-3xl md:text-2xl sm:hidden`}
      >
        {content}
        <motion.hr
          className='absolute bottom-0 h-0 border-b-2 border-black'
          initial='idle'
          variants={hrVariants}
          animate={isHovered}
        />
      </motion.span>
    </Link>
  )
}

export default NavbarElement
