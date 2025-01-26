import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { SearchPage } from "./pages/SearchPage"
import { PostPage } from "./pages/PostPage"
import { FooterComponent } from "./components/Footer"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import CategoryPage from "./pages/CategoryPage"
import SignUpPageAdmin from "./pages/SignUpAdmin"
import DashBoardPage from "./pages/DashBoardPage"
import NewsAdmin from "./pages/NewsAdmin"
import CategoryAdmin from "./pages/CategoryAdmin"
import CreateNewsAdmin from "./pages/CreateNewsAdmin"
import NotFoundPage from "./pages/NotFoundPage"

export const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/notice/:id" element={<PostPage/>}/>
          <Route  path="/search/:search" element={<SearchPage/>}/>
          <Route path="/signIn" element={<SignInPage/>}/>
          <Route path="/signUp" element={<SignUpPage/>}/>
          <Route path="/signUp/admin" element={<SignUpPageAdmin/>}/>
          <Route path="/category/:id" element={<CategoryPage/>}/>
          <Route path="/admin/dashboard" element={<DashBoardPage/>}/>
          <Route path="/admin/news" element={<NewsAdmin/>}/>
          <Route path="/admin/category" element={<CategoryAdmin/>}/>
          <Route path="/admin/createNews" element={<CreateNewsAdmin/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>

        <FooterComponent/>
    </BrowserRouter>
  )
}
