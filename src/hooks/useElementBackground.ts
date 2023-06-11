import { MotionValue, useMotionValue } from 'framer-motion'
import { MouseEvent, MouseEventHandler } from 'react'

const useElementBackground: () => [
  MouseEventHandler<HTMLElement>,
  MotionValue<number>,
  MotionValue<number>
] = () => {
  const xPosition = useMotionValue(0)
  const yPosition = useMotionValue(0)

  const mouseMoveHandler: MouseEventHandler = (e: MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top } = e.currentTarget.getBoundingClientRect()

    xPosition.set(clientX - left)
    yPosition.set(clientY - top)
  }

  return [mouseMoveHandler, xPosition, yPosition]
}

export default useElementBackground
