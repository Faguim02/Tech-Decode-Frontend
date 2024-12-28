import { useEffect, useState } from 'react'
import FeaturedNewsPage from '../../components/FeaturedNewsPage'
import { NavBarComponent } from '../../components/NavBar'
import { PostComponent } from '../../components/PostComponent'
import PostService from '../../services/api/postService'
import { postDto } from '../../dtos/PostDto'
import { CategoryService } from '../../services/api/categoryService'
import { categoryDto } from '../../dtos/CategoryDto'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {

  const [posts, setPosts] = useState<postDto[]>([])
  const [categories, setCategories] = useState<categoryDto[]>([]);

  const navigate = useNavigate();

  useEffect(()=>{
    (async()=>{
      const postsService = new PostService()
      const posts = await postsService.findAllPosts()
      setPosts(posts)

      const categories = await new CategoryService().findAllCategories();

      if(categories === null) {
        return;
      }
      
      setCategories(categories)
    })()
  },[])

  return (
    <>
      <NavBarComponent/>
      <FeaturedNewsPage/>

      <ul className='flex flex-wrap px-8 gap-4'>
        {categories.map(category => (
          <li key={category.id} onClick={()=> navigate(`category/${category.id}`)} className='p-4 bg-slate-100 rounded-lg shadow-sm cursor-pointer hover:bg-slate-200 active:bg-slate-300'>{category.name}</li>
        ))}
      </ul>

      <article className='mx-8 py-8'>
        <h2 className='text-xl font-bold py-4'>Todas as noticias</h2>
        <section className='grid grid-cols-3 gap-x-8 gap-y-12'>
          {posts.map(post => (
            <PostComponent 
              key={post.id}
              bannerUrl={post.bannerUrl}
              date_at={post.date_at}
              id={post.id}
              title={post.title}
            />
          ))}
        </section>
      </article>
    </>
  )
}
