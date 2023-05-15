const Navbar = () => {
  return (
    <div className='w-full h-32 border-b-2 border-black  pl-8 justify-between flex items-center'>
      <h1 className='font-title w-min text-[64px] leading-none'>LOWEL</h1>
      <div className='w-max h-full flex'>
        <div className='h-full w-max flex items-center justify-between gap-16 pr-8'>
          <p className='font-main text-[40px]'>about</p>
          <p className='font-main text-[40px]'>order trackin'</p>
        </div>
        <div className='h-full w-32 bg-secondary border-l-2 border-black '></div>
      </div>
    </div>
  )
}

export default Navbar
