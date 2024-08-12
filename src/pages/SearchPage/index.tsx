import { useParams } from 'react-router-dom'
import { NavBarComponent } from '../../components/NavBar'
import { useEffect, useState } from 'react'
import PostService from '../../services/api/postService'
import { postDto } from '../../dtos/PostDto'
import { SearchPost } from './components/SearchPost'
import { SearchSkeleton } from './components/SearchSkeleton'

export const SearchPage = () => {

  const { search } = useParams() as { search: string }
  const [postsSearch, setPostsSearch] = useState<postDto[] | number | null>(null)

  useEffect(()=> {
    (async()=> {
      const postService = new PostService()
      const postsSearch = await postService.searchPosts(search)
      setPostsSearch(postsSearch)
    })()
  },[search])

  if(!postsSearch) {
    return (
      <>
        <NavBarComponent/>
        <ul className='p-16 min-h-screen rounded-md space-y-6'>
          <li>
            <h3 className='text-lg font-bold text-slate-800'>Procurando por "{search}"</h3>
          </li>
          <SearchSkeleton/>
          <SearchSkeleton/>
          <SearchSkeleton/>
          <SearchSkeleton/>
          <SearchSkeleton/>
        </ul>
      </>
    )
  }

  if(postsSearch == 404) {
    return (
      <>
        <NavBarComponent/>
        <ul className='p-16 min-h-screen rounded-md space-y-6'>
          <li>
            <h3 className='text-lg font-bold text-slate-800'>Nenhuma noticia encontrada</h3>
          </li>
        </ul>
      </>
    )
  }
  
  return (
    <>
      <NavBarComponent/>
      <ul className='p-16 min-h-screen rounded-md space-y-6'>
        <li>
          <h3 className='text-lg font-bold text-slate-800'>Resultado de "{search}"</h3>
        </li>
        
        {typeof postsSearch !== 'number' && postsSearch?.map(post => (
          <SearchPost banner_url={post.banner_url} id={post.id} title={post.title} date_at={post.date_at} key={post.id}/>
        ))}
      </ul>
    </>
  )
}
