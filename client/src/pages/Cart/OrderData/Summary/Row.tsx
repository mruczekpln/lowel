import { motion } from 'framer-motion'
import { SummaryData } from '.'

interface SummaryRowProps extends React.ComponentProps<'div'> {
  data: SummaryData
}

const SummaryRow = ({ data }: SummaryRowProps) => {
  return (
    <motion.div
      initial={{ opacity: 1, height: 0 }}
      animate={{ height: 'auto' }}
      exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
      className='w-full flex justify-between'
    >
      <p>
        <b>{data.name}</b> - {data.price} x {data.quantity}
      </p>
      <p>{data.totalPrice.toFixed(2)}$</p>
    </motion.div>
  )
}

export default SummaryRow
