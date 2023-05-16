import { Link } from 'react-router-dom'
import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { MouseEvent } from 'react'

interface HomePageButtonProps extends React.ComponentProps<'button'> {
  content: string
}

const HomePageButton = ({ content }: HomePageButtonProps) => {
  const xPosition = useMotionValue(0)
  const yPosition = useMotionValue(0)

  const mouseMoveHandler = (e: MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top } = e.currentTarget.getBoundingClientRect()

    xPosition.set(clientX - left)
    yPosition.set(clientY - top)
  }

  return (
    <motion.button
      className='font-title bg-white w-60 py-8 text-4xl rounded-2xl border-2 border-accent shadow-main duration-200 transition-shadow relative overflow-hidden group'
      transition={{ duration: 0.1 }}
      onMouseMove={mouseMoveHandler}
      whileTap={{
        y: 2,
        boxShadow: '0px 1px 0px #000000',
      }}
    >
      <motion.div
        className='absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 duration-300'
        style={{
          background: useMotionTemplate`radial-gradient(200px circle at ${xPosition}px ${yPosition}px, #1E1E1E, transparent)`,
        }}
      ></motion.div>
      {content}
    </motion.button>
  )
}

const HomePage = () => {
  return (
    <div className='h-auto font-main overflow-x-hidden'>
      <main className='flex flex-col h-screen w-full'>
        <Navbar active='home'></Navbar>
        <section className='bg-secondary grid h-full place-items-center'>
          <div className='flex justify-between gap-[100px] h-[550px] w-[1100px]'>
            <div className='w-1/2 flex flex-col justify-between'>
              <h1 className='text-[90px] leading-none font-bold font-main text-accent'>
                New <br /> Spring '23 Exclusives
              </h1>
              <p className='w-4/5 text-justify text-[16px] leading-5'>
                Make a statement with our unique and exclusive apparel collection at Lowel. Find
                your perfect outfit and be the envy of all your friends. Get ready to stand out from
                the crowd with our new line of exclusive apparel at Lowell Brand. Shop now and
                discover your new favorite outfit.
              </p>
              <div className='flex gap-8'>
                <HomePageButton content='SHOP NOW'></HomePageButton>
                <motion.a
                  className='font-title text-4xl py-8 pl-10'
                  transition={{ duration: 0.1, ease: 'easeIn' }}
                  whileHover={{
                    y: -4,
                  }}
                >
                  <Link to='#'>DISCOVER US</Link>
                </motion.a>
              </div>
            </div>
            <div className='w-2/5 h-full border-2 rounded-2xl bg-white border-black shadow-main'></div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default HomePage
