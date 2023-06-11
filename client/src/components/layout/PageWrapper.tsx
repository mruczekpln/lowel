import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../ui/Footer'
import Navbar from '../ui/Navbar'

type PageWrapperProps = React.ComponentProps<'div'>

const PageWrapper = ({ children }: PageWrapperProps) => {
  const { pathname } = useLocation()
  useEffect(() => {
    document.documentElement.scrollTo({ left: 0, top: 0, behavior: 'auto' })
  }, [pathname])
  return (
    <div className='max-w-screen h-auto w-full overflow-x-hidden font-main'>
      <main className='max-w-screen flex h-auto w-full flex-col overflow-x-hidden'>
        <Navbar></Navbar>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PageWrapper
