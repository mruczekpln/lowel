import Footer from '../ui/Footer'
import Navbar, { Active } from '../ui/Navbar'

interface PageWrapperProps extends React.ComponentProps<'div'> {
  active: Active
}

const PageWrapper = ({ children, active }: PageWrapperProps) => {
  return (
    <div className='h-auto font-main overflow-x-hidden'>
      <main className='flex flex-col min-h-screen h-auto w-full'>
        <Navbar active={active}></Navbar>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default PageWrapper
