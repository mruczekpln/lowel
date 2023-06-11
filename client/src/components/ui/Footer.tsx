import React from 'react'
import { Link } from 'react-router-dom'
import Input from './Input'

interface FooterElementProps extends React.ComponentProps<'p'> {
  content: string
  linkTo: string
  type?: 'large' | 'small'
}

const FooterElement = ({ content, linkTo, type = 'large' }: FooterElementProps) => {
  return type === 'large' ? (
    <Link
      to={linkTo}
      className='relative left-0 font-medium transition-[left] delay-100 duration-200 hover:left-4'
    >
      {content}
    </Link>
  ) : (
    <a
      href={linkTo}
      className='delay-50 relative left-0 text-lg font-normal transition-[left] duration-100 hover:left-2'
    >
      {content}
    </a>
  )
}

interface FooterProps extends React.ComponentProps<'footer'> {
  type?: 'grey' | 'white'
}

const Footer = ({ type = 'white' }: FooterProps) => {
  const backgroundCSS = type === 'white' ? 'bg-white' : 'bg-secondary'

  return (
    <section
      className={`max-w-screen flex h-[500px] w-full overflow-x-hidden border-t-2 border-black lg:h-[1000px] lg:flex-col ${backgroundCSS}`}
    >
      <div className='relative h-full w-full border-r-2 border-black pl-16 lg:border-0 lg:border-b-2 md:pl-8'>
        <div className='flex flex-col gap-4 pt-16 text-3xl font-medium' id='footer-links'>
          <FooterElement linkTo='/about' content='about'></FooterElement>
          <FooterElement linkTo='/products' content='all products'></FooterElement>
          <FooterElement linkTo='/' content='home'></FooterElement>
          <FooterElement linkTo='#hero' content='hero' type='small'></FooterElement>
          <FooterElement
            linkTo='#exclusives'
            content="'23 spring exclusives"
            type='small'
          ></FooterElement>
        </div>
        <h1 className='absolute bottom-8 font-title text-[64px] leading-none'>LOWEL</h1>
      </div>
      <div className='relative h-full w-full pl-16 md:pl-8'>
        <div className='flex w-max flex-col gap-4 pt-16'>
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
