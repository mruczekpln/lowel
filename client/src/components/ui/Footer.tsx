import Input from './Input'

const Footer = () => {
  return (
    <section className='flex w-full h-[500px] border-t-2 border-black'>
      <div className='w-1/2 h-full border-r-2 border-black pl-16 relative'>
        <div className='flex flex-col gap-4 text-3xl font-medium pt-16'>
          <p>about</p>
          <p>track your order</p>
          <p>home page</p>
          <p className='text-lg font-normal'>hero</p>
          <p className='text-lg font-normal'>'23 spring exclusives</p>
        </div>
        <h1 className='absolute bottom-8 font-title text-[64px] leading-none'>LOWEL</h1>
      </div>
      <div className='w-1/2 h-full pl-16 relative'>
        <div className='flex flex-col gap-4 w-max pt-16'>
          <p className='w-[300px] text-lg'>
            Join our newsletter community and be the first to know about our exciting updates,
            events, and sales.
          </p>
          <Input placeholder='your email'></Input>
          <p>do it!</p>
        </div>
        <h1 className='absolute bottom-8 font-title text-[64px] leading-none'>
          SIGN UP {'>'} NEWSLETTER
        </h1>
      </div>
    </section>
  )
}

export default Footer
