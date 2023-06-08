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
      className='font-medium hover:left-4 left-0 relative duration-200 delay-100 transition-[left]'
    >
      {content}
    </Link>
  ) : (
    <a
      href={linkTo}
      className='text-lg font-normal duration-100 delay-50 transition-[left] left-0 hover:left-2 relative'
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
    <section className={`flex w-full h-[500px] border-t-2 border-black ${backgroundCSS}`}>
      <div className='w-1/2 h-full border-r-2 border-black pl-16 relative'>
        <div className='flex flex-col gap-4 text-3xl font-medium pt-16'>
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
