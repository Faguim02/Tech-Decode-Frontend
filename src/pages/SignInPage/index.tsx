import ilustration from '../../assets/ilustrationLogin.svg';

export default function SignInPage() {
  return (
    <div className='flex flex-row justify-center items-center h-screen' style={{backgroundColor: '#ECEBE4'}}>
      
      <img src={ilustration} alt="Preview" className='h-3/4'/>

      <form className="flex flex-col w-1/3 bg-white px-10 h-3/4 gap-4 justify-center">
        <h1 className='text-xl text-center font-bold'>Acessar conta</h1>
        <input type="email" placeholder="E-mail" className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100' required/>
        <input type="password" placeholder="Senha" className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100' required/>
        <button type="submit" className='px-5 py-2 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500' style={{backgroundColor: '#7880B5'}}>Entrar</button>
        <a href="" className='font-bold text-slate-800 text-center text-sm' >não tem uma conta ainda? click aqui</a>
      </form>
      
    </div>
  );
}