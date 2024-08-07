export const PostPage = () => {
  return (
    <main className='min-h-screen space-y-8 flex flex-col items-center'>
      <div style={{
        width: '100%',
        height: '320px',
        background: "url(https://i.pinimg.com/564x/1f/87/b2/1f87b29a2df46100a75aa86b170a21cb.jpg)",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: 'cover'
      }}></div>

      <section className="space-y-2 w-1/2">
        <span className="font-semibold text-slate-600">21 jan 2004</span>

        <h1 className="text-2xl font-bold text-slate-800">IA assume pela primeira vez na CEO</h1>
      </section>

      <p className="text-justify text-slate-600 w-1/2">
      Lorem ipsum dolor sit amet. Et omnis voluptate et placeat consequatur et odio placeat qui accusamus delectus. Et saepe fugit ut doloremque minima cum sequi amet eos amet reiciendis aut voluptates incidunt.
      33 quis placeat et voluptates minima hic quia laudantium et reprehenderit voluptatem ut molestias perspiciatis sit dolores rerum ut perferendis consequatur. Et reiciendis accusantium qui dolor dolorem sit accusantium perferendis ex odit voluptatibus et exercitationem distinctio est assumenda perferendis cum nobis eius? Sed quaerat aliquid At nihil velit sed tempora repudiandae ab eaque animi non tempora eligendi ab ratione velit?
      Sed rerum quasi qui nihil Quis est temporibus praesentium sit odio asperiores et quia dolorem. Non amet velit ut facilis similique ut quod consequuntur.
      </p>

      <a href="" className="text-blue-600 font-bold w-1/2">Fonte da notícia</a>

      <div className="h-12"></div>

      <article className="w-1/2  space-y-10">
        <h2 className="text-xl text-slate-700 font-bold">Comentarios <span className="bg-slate-800 text-slate-200 px-3 py-1 rounded text-sm">2</span></h2>

        <ul className="space-y-4">
          <li className="flex items-center space-x-2 shadow">
            <img src="https://i.pinimg.com/564x/41/76/b9/4176b9b864c1947320764e82477c168f.jpg" alt="" className="w-10 h-10 rounded-full"/>
            <section>
              <span className="text-lg font-semibold text-slate-700">Pessoa</span>
              <p className="text-slate-600">É verdade</p>
            </section>
          </li>
          <li className="flex items-center space-x-2 shadow">
            <img src="https://i.pinimg.com/564x/41/76/b9/4176b9b864c1947320764e82477c168f.jpg" alt="" className="w-10 h-10 rounded-full"/>
            <section>
              <span className="text-lg font-semibold text-slate-700">Pessoa</span>
              <p className="text-slate-600">É verdade</p>
            </section>
          </li>
        </ul>

        <form className="flex flex-col space-y-2">
          <input type="text" placeholder='Seu nome' className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100'/>
          <textarea placeholder='Seu comentario' className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100'/>
          <button className='px-5 py-2 bg-slate-400 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500'>Ver mais</button>
        </form>


      </article>

      <div className="h-12"></div>

    </main>
  )
}
