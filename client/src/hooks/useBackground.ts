import { useMotionValue } from 'framer-motion'

const useBackground = () => {
  const xPosition = useMotionValue(0)
  const yPosition = useMotionValue(0)

  const mouseMoveHandler = (e: MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top } = e.currentTarget.getBoundingClientRect()

    xPosition.set(clientX - left)
    yPosition.set(clientY - top)
  }

  return [mouseMoveHandler, xPosition, yPosition]
}

export default useBackground
