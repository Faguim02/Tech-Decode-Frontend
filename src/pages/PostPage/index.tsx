import { useEffect, useState } from "react"
import { postDto } from "../../dtos/PostDto"
import PostService from "../../services/api/postService"
import { useParams } from "react-router-dom"
import { Skeleton, useToast } from "@chakra-ui/react"
import CommentService from "../../services/api/commentService"
import { commentDto } from "../../dtos/ComentDto"
import TextFormatter from "../../components/TextFormatter"

export const PostPage = () => {

  const [post, setPost] = useState<postDto | null>(null)
  const [commentValue, setCommentValue] = useState<string>()

  const { id } = useParams() as {id: string}

  const toast = useToast();

  useEffect(()=>{

    window.scrollTo({top: 0, behavior: 'smooth'});

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
      post: {id: id}
    } as commentDto

    const commentService = new CommentService()
    const res = await commentService.createComment(newData)

    if(res.status === 201) {
      
      const postService = new PostService()
      const post = await postService.findOnePost(id)
      setPost(post)

      toast({
        title: res.title,
        description: res.message,
        status: "success",
        position: 'bottom-left',
        duration: 9000,
        isClosable: true,
      })

      setCommentValue('');

      return;
    }

    toast({
      title: res.title,
      description: res.message,
      position: 'bottom-left',
      status: "error",
      duration: 9000,
      isClosable: true,
    })

    setCommentValue('');
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

      <section className="space-y-2 w-full px-4 md:w-1/2">
        <span className="font-semibold text-slate-600">{post.date_at}</span>

        <h1 className="text-2xl font-bold text-slate-800">{post.title}</h1>
      </section>

      <p className="text-justify text-slate-600 px-4 md:w-1/2">
        <TextFormatter content={post.description as string}/>
      </p>

      <a href={post.font} className="text-blue-600 font-bold px-4 md:w-1/2">Fonte da notícia</a>

      <div className="h-12"></div>

      <article className="px-4 w-full md:w-1/2 space-y-10">
        <h2 className="text-xl text-slate-700 font-bold">Comentarios <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded text-sm">{post.comments?.length || 0}</span></h2>

        <ul className="space-y-4">
          {post.comments && post.comments.map(coment => (
            <li className="flex items-center space-x-2 shadow" key={coment.id}>
              <img src="https://i.pinimg.com/564x/41/76/b9/4176b9b864c1947320764e82477c168f.jpg" alt="" className="w-10 h-10 rounded-full"/>
              <section>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold text-slate-700">{coment.username}</span>
                  <span className="text-sm text-slate-600">{coment.date_at}</span>
                </div>
                <p className="text-slate-600">{coment.comment}</p>
              </section>
            </li>
          ))}
        </ul>

        <form className="flex flex-col space-y-2 px-1 md:w-1/2" onSubmit={handleCreateComment}>
          <textarea placeholder='Seu comentario' onChange={(e)=>setCommentValue(e.target.value)} value={commentValue} className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100'/>
          <button className='px-5 py-2 bg-slate-400 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500'>Publicar</button>
        </form>


      </article>

      <div className="h-12"></div>

    </main>
  )
}
