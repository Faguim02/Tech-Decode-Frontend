import { FaGithub, FaInstagram, FaLinkedin, FaRegUser } from 'react-icons/fa'
import { NavBarComponent } from '../../components/NavBar'
import style from './style.module.css'

export const ContactPage = () => {
  return (
    <>
      <NavBarComponent />

      <div className='h-screen'>
        <h1 className='text-2xl w-full text-center font-bold text-slate-800 p-16'>Você tambem pode me seguir nas redes sociaís</h1>

        <nav>
          <ul className='flex justify-center space-x-8'>
            <li>
              <a href="https://www.instagram.com/faguim_02/">
                <FaInstagram size={30} className='text-slate-800'/>
              </a>
            </li>

            <li>
              <a href="https://github.com/Faguim02">
                <FaGithub size={30} className='text-slate-800'/>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/fagner-muniz-de-s%C3%A1-6b1211215/">
                <FaLinkedin size={30} className='text-slate-800'/>
              </a>
            </li>

            <li>
              <a href="https://portifolio-faguim-02.netlify.app/">
                <FaRegUser size={30} className='text-slate-800'/>
              </a>
            </li>

          </ul>
        </nav>
      </div>

    </>
  )
}
