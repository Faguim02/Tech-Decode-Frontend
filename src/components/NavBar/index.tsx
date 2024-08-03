import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export const NavBarComponent = () => {
  return (
    <nav className='flex justify-between items-center px-5 py-2 shadow-md'>
        <figure>
            <img src={logo} alt="logo" />
        </figure>

        <nav className='px-5 py-2 shadow-md rounded-md'>
            <ul className='flex gap-8'>
                <li>
                    <Link to={""} className='text-slate-600 font-semibold'> <span>•</span> Inicio</Link>
                </li>
                <li>
                    <Link to={""} className='text-slate-600 font-semibold'> <span>•</span> Contato</Link>
                </li>
                <li>
                    <Link to={""} className='text-slate-600 font-semibold'> <span>•</span> Sobre</Link>
                </li>
            </ul>
        </nav>

        <form>
            <input type="text" placeholder='Pesquisar' className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100'/>
        </form>
    </nav>
  )
}
