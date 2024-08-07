import { NavBarComponent } from '../../components/NavBar'
import style from './style.module.css'

export const SearchPage = () => {
  return (
    <>
      <NavBarComponent/>
      <ul className='p-16 min-h-screen rounded-md space-y-6'>
        <li>
          <h3 className='text-lg font-bold text-slate-800'>Resultado de "aa"</h3>
        </li>
        <li className='flex space-x-4 shadow'>
          <img src="https://i.pinimg.com/564x/1f/87/b2/1f87b29a2df46100a75aa86b170a21cb.jpg" alt="" className='rounded-md object-cover' style={{
            width: '200px',
            height: '180px'
          }}/>
          <section className='py-1'>
            <h2 className='text-lg font-bold text-slate-800'>Novas ias do as</h2>
            <span className='text-sm font-semibold text-slate-600'>02 jan 2024</span>
          </section>
        </li>
        <li className='flex space-x-4 shadow'>
          <img src="https://i.pinimg.com/564x/1f/87/b2/1f87b29a2df46100a75aa86b170a21cb.jpg" alt="" className='rounded-md' style={{
            width: '200px',
            height: '180px'
          }}/>
          <section className='py-1'>
            <h2 className='text-lg font-bold text-slate-800'>Novas ias do as</h2>
            <span className='text-sm font-semibold text-slate-600'>02 jan 2024</span>
          </section>
        </li>
      </ul>
    </>
  )
}
