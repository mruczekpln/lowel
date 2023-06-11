interface InputProps extends React.ComponentPropsWithRef<'input'> {
  placeholder: string
}

const Input = ({ placeholder }: InputProps) => {
  return (
    <input
      type='text'
      className='py-8 pl-6  placeholder:font-semibold placeholder:text-secondary placeholder:font-main border-2 border-black rounded-2xl'
      placeholder={placeholder}
    />
  )
}

export default Input
