import { Link } from 'react-router-dom'
import Navbar from '../../components/ui/Navbar'
import Footer from '../../components/ui/Footer'

const HomePage = () => {
  return (
    <div className='h-auto font-main overflow-x-hidden'>
      <Navbar></Navbar>
      <section className='bg-secondary grid place-items-center'>
        <div className='flex justify-between my-48 gap-[100px] h-[550px] w-[1100px]'>
          <div className='w-1/2 flex flex-col justify-between'>
            <h1 className='text-[90px] leading-none font-bold font-main text-accent'>
              New <br /> Spring '23 Exclusives
            </h1>
            <p className='w-4/5 text-justify text-[16px] leading-5'>
              Make a statement with our unique and exclusive apparel collection at Lowel. Find your
              perfect outfit and be the envy of all your friends. Get ready to stand out from the
              crowd with our new line of exclusive apparel at Lowell Brand. Shop now and discover
              your new favorite outfit.
            </p>
            <div className='flex gap-8'>
              <button className='font-title bg-white w-60 py-8 text-4xl rounded-2xl border-2 border-accent shadow-main'>
                SHOP NOW
              </button>
              <Link to='#' className='font-title text-4xl py-8 pl-10'>
                DISCOVER US
              </Link>
            </div>
          </div>
          <div className='w-2/5 h-full border-2 rounded-2xl bg-white border-black shadow-main'></div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default HomePage
