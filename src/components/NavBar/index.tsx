import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { useState } from 'react'

export const NavBarComponent = () => {

    const [search, setSearch] = useState<string>()

    const navigate = useNavigate()

    async function handleSearchPost(event: any) {
        event.preventDefault()

        navigate(`/search/${search}`)

    }

  return (
    <nav className='flex justify-between items-center px-5 py-2 shadow-md'>
        <figure>
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

        <form onSubmit={handleSearchPost}>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Pesquisar' className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100'/>
        </form>
    </nav>
  )
}
