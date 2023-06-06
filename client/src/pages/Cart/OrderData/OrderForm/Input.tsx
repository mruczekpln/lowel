import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { ErrorOption, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { FormValues } from '.'

interface InputProps extends React.ComponentProps<'input'> {
  label: Path<FormValues>
  register: UseFormRegister<FormValues>
  required?: boolean
  errorOption?: ErrorOption
}

const Input = (props: InputProps) => {
  const requiredProps: RegisterOptions<FormValues> = {
    validate:
      props.label !== 'firstName'
        ? {
            whiteSpace: (value) => value.toString().trim() !== '' || 'haha whitespace trick!',
          }
        : undefined,
    required: props.required ? 'this field is required' : false,
    maxLength: props.maxLength && {
      value: props.maxLength,
      message: `must be less than ${props.maxLength + 1} characters`,
    },
    minLength: props.minLength && {
      value: props.minLength,
      message: `must be more than ${props.minLength - 1} characters`,
    },
    pattern: props.pattern
      ? { value: RegExp(props.pattern), message: `invalid format` }
      : undefined,
  }

  const type = props.type ? props.type : 'text'

  return (
    <>
      <div className={`${props.className} h-full border-accent  relative`}>
        <input
          {...props.register(props.label, { ...requiredProps })}
          type={type}
          placeholder={props.placeholder}
          className='h-full w-full rounded-md pl-4 bg-secondary placeholder:text-accent'
          onChange={(e) => {
            props.pattern && console.log(e.target.value, e.target.value.match(props.pattern))
          }}
        />
        {props.errorOption && (
          <AnimatePresence mode='wait'>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className='absolute -bottom-[19px] left-1 text-[12px] font-bold w-max'
            >
              {props.errorOption.message}
            </motion.p>
          </AnimatePresence>
        )}
      </div>
    </>
  )
}

export default Input
