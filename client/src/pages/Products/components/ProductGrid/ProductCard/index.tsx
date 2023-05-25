import ProductCardActions from './Actions'
import ProductCardInfo from './Info'

interface ProductCardProps extends React.ComponentProps<'div'> {
  title: string
  description: string
  price: number
  discountedPrice?: number
}

const ProductCard = (props: ProductCardProps) => {
  return (
    <div className='w-full h-[700px] flex flex-col gap-8 font-main'>
      <div className='w-full grid place-items-center h-[400px] bg-secondary group'>
        <div
          className='p-4 bg-white text-xl text-accent rounded-xl opacity-0 group-hover:opacity-100 duration-200 cursor-pointer'
          onClick={(e) => alert(e.target)}
        >
          see more
        </div>
      </div>
      <ProductCardInfo {...props} />
      <ProductCardActions />
    </div>
  )
}

export default ProductCard
