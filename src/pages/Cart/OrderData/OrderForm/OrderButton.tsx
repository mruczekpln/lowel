import { motion, useMotionTemplate } from 'framer-motion'
import useElementBackground from '../../../../hooks/useElementBackground'

type OrderButtonProps = React.ComponentProps<'button'>
const OrderButton = (props: OrderButtonProps) => {
  const [mouseMoveHandler, xPosition, yPosition] = useElementBackground()

  return (
    <motion.button
      onMouseMove={(e) => mouseMoveHandler(e)}
      type='submit'
      className='w-full h-32 bg-accent rounded-xl mt-8 font-title text-white text-5xl relative group'
    >
      <motion.div
        className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 duration-300'
        style={{
          background: useMotionTemplate`radial-gradient(300px circle at ${xPosition}px ${yPosition}px, #D9D9D9, transparent)`,
        }}
      ></motion.div>
      ORDER
    </motion.button>
  )
}

export default OrderButton
