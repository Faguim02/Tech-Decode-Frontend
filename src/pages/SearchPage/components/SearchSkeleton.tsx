import { Skeleton } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const SearchSkeleton = () => {
  return (
    <motion.li 
    className='flex space-x-4 shadow'
    initial={{x: -100, opacity: 0}}
    viewport={{once: true}}
    whileInView={{x: 0, opacity: 1}}
    transition={{duration: 0.8, type: 'spring'}}
    >
      
      <Skeleton>
      <div className='rounded-md object-cover' style={{
        width: '200px',
        height: '180px'
      }}></div>
      </Skeleton>

      <section className='py-1'>
        <div>
            <Skeleton>
                <div>Titulo da noticia aqui texto texto e mais texos texto</div>
            </Skeleton>
        </div>
        
        <div>
            <Skeleton marginTop={2} width={32}>
                <div>a</div>
            </Skeleton>
        </div>
      </section>
    </motion.li>
  )
}
