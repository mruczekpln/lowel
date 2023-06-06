interface ProductCardInfoProps extends React.ComponentProps<'div'> {
  title: string
  description: string
  price: number
  discountedPrice?: number
}

const ProductCardInfo = ({ title, description, price, discountedPrice }: ProductCardInfoProps) => {
  return (
    <div className='grow flex items-center gap-6'>
      <h1 className='font-black font-main text-4xl w-full'>{title}</h1>
      <div className='flex flex-col items-end'>
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
