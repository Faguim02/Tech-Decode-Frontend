import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { ContactPage } from "./pages/ContactPage"
import { AboltPage } from "./pages/AboutPage"
import { SearchPage } from "./pages/SearchPage"
import { PostPage } from "./pages/PostPage"

export const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/notice/:id" element={<PostPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboltPage/>}/>
          <Route  path="/search/:search" element={<SearchPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}
