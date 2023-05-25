interface ProductCardInfoProps extends React.ComponentProps<'div'> {
  title: string
  description: string
  price: number
  discountedPrice?: number
}

const ProductCardInfo = ({ title, description, price, discountedPrice }: ProductCardInfoProps) => {
  return (
    <div className='flex items-center gap-4'>
      <div className='w-full flex flex-col gap-4'>
        <h1 className='font-bold font-title text-4xl'>{title}</h1>
        <p className='text-[15px]'>
          {description}... <b>Read More</b>
        </p>
      </div>
      <div className='flex flex-col items-end '>
        {discountedPrice ? (
          <>
            <h2 className='italic font-semibold text-3xl'>{discountedPrice}$</h2>
            <h2 className='italic text-secondary line-through font-semibold text-xl'>{price}$</h2>
          </>
        ) : (
          <h2 className='italic font-semibold text-3xl'>{price}$</h2>
        )}
      </div>
    </div>
  )
}

export default ProductCardInfo
