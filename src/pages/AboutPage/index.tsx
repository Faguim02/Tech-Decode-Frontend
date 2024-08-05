import { NavBarComponent } from '../../components/NavBar'

export const AboltPage = () => {
  return (
    <>
      <NavBarComponent/>
      <div className='h-screen flex flex-col justify-center items-center p-64 space-y-6'>
        <h1 className='text-slate-800 text-2xl font-bold'>TechDecode: Desvendando o mundo da tecnologia para você</h1>

        <p className='font-semibold text-slate-600 text-justify'>
          O TechDecode é um blog que te informa sobre as últimas novidades e tendências do mundo da tecnologia. Criado em 4 de março de 2024 por Fagner Muniz de Sá, o blog é sua paixão por desenvolvimento web e te mantém atualizado sobre as inovações que moldam nosso mundo.
        </p>

        <article className='w-full'>
          <h2 className='text-slate-800 text-xl font-bold'>No TechDecode você encontra:</h2>
          <ul>
            <li className='font-semibold text-slate-600 text-justify'>Notícias: Tudo sobre os últimos lançamentos, atualizações e eventos do mundo da tecnologia.</li>
            <li className='font-semibold text-slate-600 text-justify'>Tutoriais: Aprenda novas habilidades e domine ferramentas tecnológicas com tutoriais passo a passo.</li>
            <li className='font-semibold text-slate-600 text-justify'>Análises: Avaliações completas de softwares, hardwares e outros produtos tecnológicos.</li>
            <li className='font-semibold text-slate-600 text-justify'>Opiniões: Insights e perspectivas sobre os impactos da tecnologia na sociedade.</li>
          </ul>
        </article>

        <h2 className='text-xl font-semibold text-slate-800 text-start w-full'>Junte-se a nós e explore o mundo da tecnologia!</h2>
      </div>
    </>
  )
}
