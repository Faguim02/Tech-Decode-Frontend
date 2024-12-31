import { useNavigate } from 'react-router-dom'
import image from '../../assets/preview.svg'
import { postDto } from '../../dtos/PostDto'

interface FeaturedNewsPageProps {
  news: postDto
}

const FeaturedNewsPage = (news: FeaturedNewsPageProps) => {

  const navigate = useNavigate()

  return (
    <main className='flex items-start gap-4 mx-8 my-16 shadow-md rounded-lg'>
        <figure className='w-1/2 h-full' style={{ height: '330px' }}>
            <img src={news?.news?.bannerUrl} alt="imagem" className='rounded-lg object-cover h-full w-full'/>
        </figure>
        <article className='flex-col space-y-4 w-1/2 p-4'>
            <span className='text-slate-400'>{news?.news?.date_at}</span>
            <h1 className='text-2xl font-bold text-slate-800'>{news?.news?.title}</h1>
            <div style={{height: '150px', overflow: 'hidden'}}>
                <p className='text-slate-700 text-justify'>{news?.news?.description}</p>
            </div>
            
            <button className='px-5 py-2 bg-slate-400 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500' onClick={()=> navigate(`/notice/${news?.news?.id}`)}>Ver mais</button>
        </article>
    </main>
  )
}

export default FeaturedNewsPage