import { useState } from 'react';
import ilustration from '../../assets/ilustrationLogin.svg';
import { UserService } from '../../services/api/userService';
import { useNavigate } from 'react-router-dom';
import { Spinner, useToast } from '@chakra-ui/react';

export default function SignInPage() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const toast = useToast();

  async function handleSubmit(e: any) {
    e.preventDefault();

    setLoading(true);
    const data = {email, password};

    let res = await new UserService().signIn(data) as any;

    console.log(res)

    if(res != true) {
      setEmail('');
      setPassword('');
      toast({ 
        title: res.title,
        description: res.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom-left'
      });
      setLoading(false);
      return;
    }

    toast({ 
      title: 'Bem-vindo!',
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'bottom-left'
    });

    setLoading(false);

    navigate('/');
  }

  return (
    <div className='flex flex-row justify-center items-center h-screen' style={{backgroundColor: '#ECEBE4'}}>
      
      <img src={ilustration} alt="Preview" className='h-3/4'/>

      <form className="flex flex-col w-1/3 bg-white px-10 h-3/4 gap-4 justify-center" onSubmit={handleSubmit}>
        <h1 className='text-xl text-center font-bold'>Acessar conta</h1>
        <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email} className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100' required/>
        <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password} className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100' required/>
        <button type="submit" className='px-5 py-2 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500' style={{backgroundColor: '#7880B5'}}>
          {loading ? <Spinner size='sm' /> : 'Entrar'}
        </button>
        <a href="" className='font-bold text-slate-800 text-center text-sm' >não tem uma conta ainda? click aqui</a>
      </form>
      
    </div>
  );
}