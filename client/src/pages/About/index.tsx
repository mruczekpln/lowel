import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

const AboutPage = () => {
  const xPosition = useMotionValue(0)
  const yPosition = useMotionValue(0)

  const mouseMoveHandler = (e: MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top } = e.currentTarget.getBoundingClientRect()

    const x = clientX - left
    const y = clientY - top

    xPosition.set(x)
    yPosition.set(y)
  }

  return (
    <div className='max-w-screen h-auto overflow-x-hidden font-main'>
      <main className='w-full h-screen flex flex-col overflow-hidden'>
        <Navbar active='about'></Navbar>
        <motion.section
          onMouseMove={mouseMoveHandler}
          className='h-full w-full grid place-items-center bg-white overflow-hidden relative group'
        >
          <div className='h-max w-max flex flex-col items-center z-0'>
            <h1 className='text-8xl'>
              <span className='text-9xl font-title leading-none after:bg-gradient-to-b from-secondary to-white relative after:h-48 after:w-48 after:left-16 after:top-4 after:absolute after:-z-10 after:rounded-full'>
                LOWEL
              </span>
              <span className='text-9xl pr-8'>™</span>With The Best
            </h1>
            <h1 className='text-8xl'>
              Quality In The{' '}
              <span className='underline underline-offset-[16px] leading-none'>Game</span>.
            </h1>
          </div>
          <motion.div
            className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 duration-300 z-10'
            style={{
              background: useMotionTemplate`radial-gradient(800px circle at ${xPosition}px ${yPosition}px, #1E1E1E, transparent)`,
            }}
          ></motion.div>
        </motion.section>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default AboutPage
