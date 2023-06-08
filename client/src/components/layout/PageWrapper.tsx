import Footer from '../ui/Footer'
import Navbar from '../ui/Navbar'

type PageWrapperProps = React.ComponentProps<'div'>

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className='h-auto font-main overflow-x-hidden'>
      <main className='flex flex-col min-h-screen h-auto w-full'>
        <Navbar></Navbar>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PageWrapper
