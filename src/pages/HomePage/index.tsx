import { useEffect, useState } from 'react'
import FeaturedNewsPage from '../../components/FeaturedNewsPage'
import { NavBarComponent } from '../../components/NavBar'
import { PostComponent } from '../../components/PostComponent'
import PostService from '../../services/api/postService'
import { postDto } from '../../dtos/PostDto'

export const HomePage = () => {

  const [posts, setPosts] = useState<postDto[]>([])

  useEffect(()=>{
    (async()=>{
      const postsService = new PostService()
      const posts = await postsService.findAllPosts()
      setPosts(posts)
    })()
  },[])

  return (
    <>
      <NavBarComponent/>
      <FeaturedNewsPage/>

      <article className='mx-8 py-16'>
        <h2 className='text-xl font-bold py-4'>Todas as noticias</h2>
        <section className='grid grid-cols-3 gap-x-8 gap-y-12'>
          {posts.map(post => (
            <PostComponent 
              key={post.id}
              banner_url={post.banner_url}
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
