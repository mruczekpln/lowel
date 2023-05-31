import { motion } from 'framer-motion'

type InputProps = React.ComponentProps<'input'>
const Input = (props: InputProps) => {
  const type = props.type ? props.type : 'text'

  return (
    <motion.input
      // initial={{ scale: 1 }}
      type={type}
      placeholder={props.placeholder}
      className={`${props.className} rounded-md h-full pl-4  border-accent bg-secondary placeholder:text-accent`}
    />
  )
}

export default Input
