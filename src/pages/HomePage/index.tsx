import FeaturedNewsPage from '../../components/FeaturedNewsPage'
import { NavBarComponent } from '../../components/NavBar'
import { PostComponent } from '../../components/PostComponent'

export const HomePage = () => {
  return (
    <>
      <NavBarComponent/>
      <FeaturedNewsPage/>

      <article className='mx-8 py-16'>
        <h2 className='text-xl font-bold py-4'>Todas as noticias</h2>
        <section className='grid grid-cols-3 gap-x-8 gap-y-12'>
          <PostComponent 
            banner_url='https://i.pinimg.com/564x/1f/87/b2/1f87b29a2df46100a75aa86b170a21cb.jpg'
            date_at='12 jun 2024'
            id='12'
            title='Mercado de TI'
          />
          <PostComponent 
            banner_url='https://i.pinimg.com/564x/ff/26/55/ff265557d59bcd1d8de129b2674e7676.jpg'
            date_at='12 jun 2024'
            id='12'
            title='Mercado de TI'
          />
          <PostComponent 
            banner_url='https://i.pinimg.com/originals/f5/8f/e8/f58fe8e19a7e25ddf0c459a3599261d6.gif'
            date_at='12 jun 2024'
            id='12'
            title='Mercado de TI'
          />
        </section>
      </article>
    </>
  )
}
