import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useRef } from 'react'
import PageWrapper from '../../components/layout/PageWrapper'
import useElementBackground from '../../hooks/useElementBackground'

const AboutPage = () => {
  const opacity = useMotionValue(0)

  const dragConstraintsRef = useRef<HTMLDivElement>(null)

  const [mouseMoveHandler, xPosition, yPosition] = useElementBackground()

  return (
    <PageWrapper>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: '100%', transition: { duration: 0.5, delay: 0.2 } }}
        onMouseMove={mouseMoveHandler}
        onHoverStart={() => opacity.set(20)}
        onHoverEnd={() => opacity.set(0)}
        className='relative grid h-[calc(100vh_-_128px)] w-full place-items-center overflow-hidden bg-white from-secondary to-transparent xl:bg-gradient-to-t lg:py-32 sm:h-auto'
        ref={dragConstraintsRef}
      >
        <motion.div
          drag
          dragSnapToOrigin
          onDragStart={() => opacity.set(0)}
          onDragEnd={() => opacity.set(20)}
          whileDrag={{
            scale: 1.05,
            transition: { duration: 0.3, ease: 'easeInOut' },
          }}
          dragTransition={{ timeConstant: 1000 }}
          dragConstraints={dragConstraintsRef}
          className='relative z-30 flex h-max w-max flex-col items-center text-8xl xl:text-[8vw] sm:w-1/2 sm:text-center sm:text-[15vw] sm:leading-normal'
        >
          <div className='flex sm:block'>
            <h1 className='flex'>
              <span className='relative from-secondary to-white font-title text-9xl leading-none after:absolute after:-top-8 after:left-16 after:-z-10 after:h-48 after:w-48 after:rounded-full after:bg-gradient-to-b xl:text-[8vw] xl:after:opacity-0 sm:text-[20vw]'>
                LOWEL
              </span>
              <span className='pr-8 text-8xl xl:text-[8vw] md:pr-4 sm:text-[15vw]'>™</span>
            </h1>
            <h1>With The Best</h1>
          </div>
          <h1 className=''>
            Quality In The{' '}
            <span className='leading-none underline underline-offset-[16px] xl:underline-offset-[2vw]'>
              Game
            </span>
            .
          </h1>
          <p className='absolute -bottom-8 left-0 font-main text-3xl font-medium text-white xl:opacity-0'>
            drag me
          </p>
        </motion.div>
        <motion.div
          className='0 absolute inset-0 z-10 rounded-xl opacity-0 duration-300'
          style={{
            background: useMotionTemplate`radial-gradient(800px circle at ${xPosition}px ${yPosition}px, #1E1E1E, transparent)`,
            opacity: useMotionTemplate`${opacity}%`,
          }}
        ></motion.div>
      </motion.section>
    </PageWrapper>
  )
}

export default AboutPage
