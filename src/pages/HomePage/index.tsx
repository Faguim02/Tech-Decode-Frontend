import FeaturedNewsPage from '../../components/FeaturedNewsPage'
import { NavBarComponent } from '../../components/NavBar'
import { PostComponent } from '../../components/PostComponent'
import style from './style.module.css'

export const HomePage = () => {
  return (
    <>
      <NavBarComponent/>
      <FeaturedNewsPage/>

      <article className='mx-8 py-16'>
        <h2 className='text-xl font-bold py-4'>Todas as noticias</h2>
        <section className='grid grid-cols-3 gap-x-8 gap-y-12'>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
          <PostComponent/>
        </section>
      </article>
    </>
  )
}
