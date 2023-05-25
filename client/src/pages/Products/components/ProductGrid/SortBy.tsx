import { motion } from 'framer-motion'
import { useState } from 'react'

const sortingChoices = ['featured', 'price asc', 'price desc', 'name'] as const

type Active = (typeof sortingChoices)[number]

const SortBy = () => {
  const [active, setActive] = useState<Active>('featured')

  return (
    <div className='flex gap-4 text-2xl col-span-3 w-full relative'>
      <p className=''>sort by:</p>
      <div className='flex gap-8 font-bold'>
        {sortingChoices.map((item, index) => (
          <p className='relative cursor-pointer' key={index} onClick={() => setActive(item)}>
            {item}
            {active === item && (
              <motion.div
                layoutId='underline'
                className='absolute inset-0 border-b-2 border-black'
              ></motion.div>
            )}
          </p>
        ))}
      </div>
    </div>
  )
}

export default SortBy
