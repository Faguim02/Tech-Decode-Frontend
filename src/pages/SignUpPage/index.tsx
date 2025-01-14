import { useState } from 'react';
import ilustration from '../../assets/ilustrationLogin.svg';
import { UserService } from '../../services/api/userService';
import { useNavigate } from 'react-router-dom';
import { Spinner, useToast } from '@chakra-ui/react';

export default function SignUpPage() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const toast = useToast();

  async function handleSubmit(e: any) {
    e.preventDefault();

    setLoading(true);
    const data = {name, email, password};

    let res = await new UserService().signUp(data) as any;

    console.log(res)

    if(res != true) {
        setName('');
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

    navigate('/signIn');
  }

  return (
    <div className='flex md:flex-row flex-col justify-center items-center h-screen' style={{backgroundColor: '#ECEBE4'}}>
      
      <img src={ilustration} alt="Preview" className='h-3/4 rounded-l-md hidden md:flex'/>

      <form className="flex flex-col md:w-1/3 sm:w-2/3 w-4/5 bg-white px-10 h-3/4 gap-4 justify-center md:rounded-r-md rounded-md" onSubmit={handleSubmit}>
        <h1 className='text-xl text-center font-bold'>Criar conta</h1>
        <input type="text" placeholder="Seu nome" onChange={(e) => setName(e.target.value)} value={name} className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100' required/>
        <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email} className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100' required/>
        <input type="password" placeholder="Crie uma senha" onChange={(e) => setPassword(e.target.value)} value={password} className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100' required/>
        <button type="submit" className='px-5 py-2 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500' style={{backgroundColor: '#7880B5'}}>
          {loading ? <Spinner size='sm' /> : 'Criar conta'}
        </button>
        <a href="/signIn" className='font-bold text-slate-800 text-center text-sm' >já tem uma conta? click aqui</a>
      </form>
      
    </div>
  );
}