import { useEffect, useState } from "react"
import { postDto } from "../../dtos/PostDto"
import PostService from "../../services/api/postService"
import { useParams } from "react-router-dom"
import { Skeleton } from "@chakra-ui/react"
import CommentService from "../../services/api/commentService"
import { commentDto } from "../../dtos/ComentDto"

export const PostPage = () => {

  const [post, setPost] = useState<postDto | null>(null)
  const [commentValue, setCommentValue] = useState<string>()
  const [user, setUser] = useState<string>()

  const { id } = useParams() as {id: string}

  useEffect(()=>{
    (async()=>{
      const postService = new PostService()
      const post = await postService.findOnePost(id)
      setPost(post)
    })()
  },[id])

  async function handleCreateComment(event: any) {
    event.preventDefault()

    const newData = {
      comment: commentValue,
      name: user,
      date: '0',
      post_id: id
    } as commentDto

    const commentService = new CommentService()
    await commentService.createComment(newData)
    window.location.reload()
  }

  if(!post) {
    return (
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32
      }}>
        <Skeleton>
          <div style={{
          width: '100%',
          height: '320px',
        }}></div>
        </Skeleton>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          width: '100%'
        }}>
          <div style={{width: '50%'}}>
            <Skeleton w={40}>
              <div>date</div>
            </Skeleton>

            <Skeleton w={80}>
              <h1>Title</h1>
            </Skeleton>
          </div>
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        width: '100%'
      }}>
          <Skeleton width={'50%'} height={'300px'}>
            <div>paragrafo</div>
          </Skeleton>
        </div>
        <br />
      </main>
    )
  }

  return (
    <main className='min-h-screen space-y-8 flex flex-col items-center'>
      <div style={{
        width: '100%',
        height: '320px',
        background: `url(${post.bannerUrl})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: 'cover'
      }}></div>

      <section className="space-y-2 w-1/2">
        <span className="font-semibold text-slate-600">{post.date_at}</span>

        <h1 className="text-2xl font-bold text-slate-800">{post.title}</h1>
      </section>

      <p className="text-justify text-slate-600 w-1/2">
      {post.description}
      </p>

      <a href={post.font} className="text-blue-600 font-bold w-1/2">Fonte da notícia</a>

      <div className="h-12"></div>

      <article className="w-1/2  space-y-10">
        <h2 className="text-xl text-slate-700 font-bold">Comentarios <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded text-sm">{post.comments?.length || 0}</span></h2>

        <ul className="space-y-4">
          {post.comments && post.comments.map(coment => (
            <li className="flex items-center space-x-2 shadow" key={coment.post_id}>
              <img src="https://i.pinimg.com/564x/41/76/b9/4176b9b864c1947320764e82477c168f.jpg" alt="" className="w-10 h-10 rounded-full"/>
              <section>
                <span className="text-lg font-semibold text-slate-700">{coment.name}</span>
                <p className="text-slate-600">{coment.comment}</p>
              </section>
            </li>
          ))}
        </ul>

        <form className="flex flex-col space-y-2" onSubmit={handleCreateComment}>
          <input type="text" onChange={(e)=>setUser(e.target.value)} placeholder='Seu nome' className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100'/>
          <textarea placeholder='Seu comentario' onChange={(e)=>setCommentValue(e.target.value)} className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100'/>
          <button className='px-5 py-2 bg-slate-400 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500'>Publicar</button>
        </form>


      </article>

      <div className="h-12"></div>

    </main>
  )
}
