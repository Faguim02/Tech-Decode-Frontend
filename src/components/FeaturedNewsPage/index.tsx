import image from '../../assets/preview.svg'

const FeaturedNewsPage = () => {
  return (
    <main className='flex items-start gap-4 mx-8 my-8 shadow-md rounded-lg'>
        <figure className='w-1/2 h-full' style={{ height: '330px' }}>
            <img src={"https://blog.runrun.it/wp-content/uploads/2024/02/IA-Generativa_Blog.png.webp"} alt="a" className='rounded-lg object-cover h-full w-full'/>
        </figure>
        <article className='flex-col space-y-4 w-1/2 p-4'>
            <span className='text-slate-400'>22 jun 2024</span>
            <h1 className='text-2xl font-bold text-slate-800'>Featured News</h1>
            <div style={{height: '150px', overflow: 'hidden'}}>
                <p className='text-slate-700 text-justify'>Lorem ipsum dolor sit amet. Et omnis aperiam est blanditiis magni id aliquam aperiam et commodi magni ut adipisci ratione non vitae dolor. Et animi harum in quam galisum est perspiciatis nostrum in omnis culpa. Sed aliquam assumenda At possimus nihil aut sint molestias ad molestiae soluta est enim mollitia rem nesciunt eaque. Sed molestiae natus ut veniam blanditiis ex reprehenderit nihil et perferendis repudiandae sed dolorum sint hic omnis voluptatem et laborum obcaecati. </p><p>Ab deleniti eaque At doloremque distinctio quo impedit facere non corporis quas eum voluptatem rerum? Et obcaecati eligendi a fugiat odit rem illo harum ea quam harum aut excepturi autem qui dolor odit. Et consectetur repellat ut totam nihil sed fugit consequatur quo fuga alias! Est dolor modi rem sunt eius aut debitis internos ut suscipit ipsa. </p><p>Ab voluptatum itaque quo internos possimus qui facilis voluptas eum dolor facilis et animi magnam non Quis voluptatem. Qui omnis rerum qui laudantium fugit qui dolor repellat aut quos velit et autem aliquid. </p>
            </div>
            
            <button className='px-5 py-2 bg-slate-400 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500'>Ver mais</button>
        </article>
    </main>
  )
}

export default FeaturedNewsPage