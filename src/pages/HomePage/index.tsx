import FeaturedNewsPage from '../../components/FeaturedNewsPage'
import { NavBarComponent } from '../../components/NavBar'
import style from './style.module.css'

export const HomePage = () => {
  return (
    <>
      <NavBarComponent/>
      <FeaturedNewsPage/>
    </>
  )
}
