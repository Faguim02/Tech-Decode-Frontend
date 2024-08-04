import log from '../../assets/logo_dark.svg'
import { FaGithub, FaInstagram, FaRegUser } from "react-icons/fa";

export const FooterComponent = () => {
  return (
    <footer className='flex flex-col justify-center items-center space-y-4 p-16 bg-slate-800'>
        <img src={log} alt="logo_footer" className='w-52'/>

        <span className='text-slate-400 font-bold'>&copy; TechDecode</span>

        <nav>
            <ul className='flex justify-center space-x-8'>
                <li>
                    <a href="https://instagram.com/faguim_02">
                        <FaInstagram className='text-slate-400 hover:text-slate-300' size={20}/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Faguim02">
                        <FaGithub className='text-slate-400 hover:text-slate-300' size={20}/>
                    </a>
                </li>
                <li>
                    <a href="https://portifolio-faguim-02.netlify.app/">
                        <FaRegUser className='text-slate-400 hover:text-slate-300' size={20}/>
                    </a>
                </li>
            </ul>
        </nav>
    </footer>
  )
}
