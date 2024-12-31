import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { useEffect, useState } from 'react'
import Cookies from 'cookies-ts'

export const NavBarComponent = () => {

    const [search, setSearch] = useState<string>()
    const [isAuth, setIsAuth] = useState<boolean>(false)

    const navigate = useNavigate()

    useEffect(()=>{
        let token = new Cookies().get('token')
        if(token) {
            setIsAuth(true)
            return;
        }
        setIsAuth(false)
    },[isAuth])

    async function handleSearchPost(event: any) {
        event.preventDefault()

        navigate(`/search/${search}`)

    }

  return (
    <nav className='flex justify-between items-center px-5 py-2 shadow-md'>
        <figure onClick={()=>navigate('/')} className='cursor-pointer'>
            <img src={logo} alt="logo" />
        </figure>

        <nav className='px-5 py-2 shadow-md rounded-md'>
            <ul className='flex gap-8'>
                <li>
                    <Link to={"/"} className='text-slate-600 font-semibold focus:text-blue-500'> <span>•</span> Inicio</Link>
                </li>
                <li>
                    <Link to={"/contact"} className='text-slate-600 font-semibold focus:text-blue-500'> <span>•</span> Contato</Link>
                </li>
                <li>
                    <Link to={"/about"} className='text-slate-600 font-semibold focus:text-blue-500'> <span>•</span> Sobre</Link>
                </li>
            </ul>
        </nav>

        <div className='flex gap-4'>
            <form onSubmit={handleSearchPost}>
                <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Pesquisar' className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100'/>
            </form>

            {isAuth ? (
                <button onClick={()=>{
                    new Cookies().remove("token")
                    setIsAuth(false)
                }} className='px-5 py-1 bg-slate-400 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500'>
                    <FaSignOutAlt />
                </button>
            ): (
                <button onClick={()=>navigate('signIn')} className='px-5 py-1 bg-slate-400 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500'>
                    <FaRegUser/>
                </button>
            )}
            
        </div>
    </nav>
  )
}
