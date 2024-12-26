import { useNavigate } from 'react-router-dom'
import { postDto } from '../../../dtos/PostDto'
import { motion } from 'framer-motion'

export const SearchPost = ({id, bannerUrl, date_at, title}:postDto) => {

  const navigate = useNavigate();

  return (
    <motion.li 
    className='flex space-x-4 shadow cursor-pointer'
    initial={{x: -100, opacity: 0}}
    viewport={{once: true}}
    whileInView={{x: 0, opacity: 1}}
    transition={{duration: 0.8, type: 'spring'}}
    onClick={()=>{navigate(`/notice/${id}`)}}
    >
      <img src={bannerUrl} alt={title} className='rounded-md object-cover' style={{
        width: '200px',
        height: '180px'
      }}/>
      <section className='py-1'>
        <h2 className='text-lg font-bold text-slate-800'>{title}</h2>
        <span className='text-sm font-semibold text-slate-600'>{date_at}</span>
      </section>
    </motion.li>
  )
}
