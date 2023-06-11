import { motion } from 'framer-motion'
import ShopNowButton from './ShopNowButton'
import { useNavigate } from 'react-router-dom'
import PageWrapper from '../../components/layout/PageWrapper'

const HomePage = () => {
  const navigate = useNavigate()
  const navigateTo = async (to: string) => {
    await new Promise((resolve) => setTimeout(() => resolve(true), 500))

    navigate(to)
  }

  return (
    <PageWrapper>
      <section className='z-0 grid h-auto min-h-[calc(100vh_-_128px)] place-items-center bg-secondary'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: '100%', transition: { duration: 0.5, delay: 0.2 } }}
          className='mx-16 flex h-auto min-h-[550px] w-auto max-w-[1100px] justify-between gap-[100px] lg:my-16 lg:w-full lg:flex-col lg:items-center lg:gap-8 '
        >
          <div className='flex w-1/2 flex-col justify-between lg:w-full lg:items-center lg:gap-8'>
            <h1 className='font-main text-[90px] font-bold leading-none text-accent lg:w-min lg:text-center md:text-6xl sm:text-5xl'>
              New <br /> Spring .23 Exclusives
            </h1>
            <p className='w-4/5 text-justify text-[16px] leading-5 lg:text-center md:text-sm'>
              Make a statement with our unique and exclusive apparel collection at Lowel. Find your
              perfect outfit and be the envy of all your friends. Get ready to stand out from the
              crowd with our new line of exclusive apparel at Lowell Brand. Shop now and discover
              your new favorite outfit.
            </p>
            <div className='flex gap-8 md:flex-col'>
              <ShopNowButton onClick={() => navigateTo('/products')}></ShopNowButton>
              <motion.a
                className='cursor-pointer py-8 pl-10 font-title text-4xl'
                transition={{ duration: 0.1, ease: 'easeIn' }}
                whileHover={{
                  y: -4,
                }}
                onClick={() => navigateTo('/about')}
              >
                DISCOVER US
              </motion.a>
            </div>
          </div>
          <div className='h-[550px] w-2/5 rounded-2xl border-2 border-black bg-white shadow-main lg:w-[400px] md:h-[400px] md:w-[300px] mobile:h-[300px] mobile:w-[250px]'></div>
        </motion.div>

        <motion.div className='absolute left-[50%] -z-10 h-[600px] w-[600px] translate-x-[-50%] rounded-full bg-white blur-xl md:hidden md:opacity-0'></motion.div>
        <motion.div className='translate-x[-50%] absolute left-[25%] -z-10 h-[400px] w-[400px]  translate-y-[20%] rounded-full bg-white md:hidden md:opacity-0'></motion.div>
      </section>
    </PageWrapper>
  )
}

export default HomePage
