import { motion } from 'framer-motion'
import { postDto } from '../../dtos/PostDto'
import { useNavigate } from 'react-router-dom'

export const PostComponent = ({ banner_url, date_at, title, id }: postDto) => {

  const navigate = useNavigate()

  return (
    <motion.article 
    key={id}
    initial={{ scale: 0.5 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring" }}
    className='cursor-pointer flex-col space-y-1 hover:scale-105 focus:border-2 focus:border-slate-400' style={{transition: '0.3s'}}
    onClick={() => navigate(`/notice/${id}`)}
    >
        <img src={banner_url} alt={title} className='rounded-lg object-none' style={{
            height: '250px',
            width: '100%'
        }}/>
        <span className='text-slate-400'>{date_at}</span>
        <h2 className='text-lg font-bold text-slate-800'>{title}</h2>
    </motion.article>
  )
}
