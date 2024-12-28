import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { ContactPage } from "./pages/ContactPage"
import { AboltPage } from "./pages/AboutPage"
import { SearchPage } from "./pages/SearchPage"
import { PostPage } from "./pages/PostPage"
import { FooterComponent } from "./components/Footer"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import CategoryPage from "./pages/CategoryPage"
import SignUpPageAdmin from "./pages/SignUpAdmin"

export const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/notice/:id" element={<PostPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboltPage/>}/>
          <Route  path="/search/:search" element={<SearchPage/>}/>
          <Route path="/signIn" element={<SignInPage/>}/>
          <Route path="/signUp" element={<SignUpPage/>}/>
          <Route path="/signUp/admin" element={<SignUpPageAdmin/>}/>
          <Route path="/category/:id" element={<CategoryPage/>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
        </Routes>

        <FooterComponent/>
    </BrowserRouter>
  )
}
