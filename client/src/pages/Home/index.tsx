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
    <PageWrapper active='home'>
      <section className='bg-secondary grid h-full min-h-[calc(100vh_-_128px)] place-items-center z-0'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: '100%', transition: { duration: 0.5, delay: 0.2 } }}
          className='flex justify-between gap-[100px] h-[550px] w-[1100px]'
        >
          <div className='w-1/2 flex flex-col justify-between'>
            <h1 className='text-[90px] leading-none font-bold font-main text-accent'>
              New <br /> Spring .23 Exclusives
            </h1>
            <p className='w-4/5 text-justify text-[16px] leading-5'>
              Make a statement with our unique and exclusive apparel collection at Lowel. Find your
              perfect outfit and be the envy of all your friends. Get ready to stand out from the
              crowd with our new line of exclusive apparel at Lowell Brand. Shop now and discover
              your new favorite outfit.
            </p>
            <div className='flex gap-8'>
              <ShopNowButton onClick={() => navigateTo('/products')}></ShopNowButton>
              <motion.a
                className='font-title text-4xl py-8 pl-10 cursor-pointer'
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
          <div className='w-2/5 h-full border-2 rounded-2xl bg-white border-black shadow-main'></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: '100%', transition: { duration: 0.5, delay: 0.2 } }}
          className='absolute left-[50%] translate-x-[-50%] bg-white w-[600px] h-[600px] blur-xl rounded-full -z-10'
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: '100%', transition: { duration: 0.5, delay: 0.2 } }}
          className='absolute left-[25%] translate-x[-50%] translate-y-[20%] bg-white w-[400px] h-[400px]  rounded-full -z-10'
        ></motion.div>
      </section>
    </PageWrapper>
  )
}

export default HomePage
