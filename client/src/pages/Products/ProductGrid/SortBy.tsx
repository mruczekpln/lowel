import { AnimatePresence, motion, stagger, useAnimate } from 'framer-motion'
import React from 'react'
import { useEffect, useState } from 'react'
import { SortType } from '../../../types/sort'

type ActiveSortType = keyof typeof SortType

interface SortByProps extends React.ComponentProps<'div'> {
  onSort: (type: SortType) => void
}

const SortBy = ({ onSort }: SortByProps) => {
  const [active, setActive] = useState<ActiveSortType>('FEATURED')

  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate('p', { opacity: 1 }, { duration: 0.5, delay: stagger(0.5, { startDelay: 0.3 }) })
  }, [])

  useEffect(() => {
    onSort(SortType[active])
  }, [active])

  return (
    <AnimatePresence>
      <motion.div className='flex gap-4 text-2xl col-span-full relative'>
        <h2 className=''>sort by:</h2>
        <div className='flex gap-8 font-bold' ref={scope}>
          <motion.p
            className='relative cursor-pointer'
            onClick={() => setActive('FEATURED')}
            initial={{ opacity: 0 }}
          >
            FEATURED
            {active === 'FEATURED' && (
              <motion.span
                layoutId='underline'
                className='absolute inset-0 border-b-2 border-black'
              ></motion.span>
            )}
          </motion.p>

          <motion.p
            className='relative cursor-pointer'
            onClick={() => setActive('PRICE_ASC')}
            initial={{ opacity: 0 }}
          >
            PRICE ASC
            {active === 'PRICE_ASC' && (
              <motion.span
                layoutId='underline'
                className='absolute inset-0 border-b-2 border-black'
              ></motion.span>
            )}
          </motion.p>

          <motion.p
            className='relative cursor-pointer'
            onClick={() => setActive('PRICE_DESC')}
            initial={{ opacity: 0 }}
          >
            PRICE DESC
            {active === 'PRICE_DESC' && (
              <motion.span
                layoutId='underline'
                className='absolute inset-0 border-b-2 border-black'
              ></motion.span>
            )}
          </motion.p>

          <motion.p
            className='relative cursor-pointer'
            onClick={() => setActive('NAME')}
            initial={{ opacity: 0 }}
          >
            NAME
            {active === 'NAME' && (
              <motion.span
                layoutId='underline'
                className='absolute inset-0 border-b-2 border-black'
              ></motion.span>
            )}
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default React.memo(SortBy)
