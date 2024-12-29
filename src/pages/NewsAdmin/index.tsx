import { useEffect, useState } from "react";
import LeftNavigation from "../../components/LeftNavigation";
import { postDto } from "../../dtos/PostDto";
import PostService from "../../services/api/postService";
import { useNavigate } from "react-router-dom";

export default function NewsAdmin() {

    const [posts, setPosts] = useState<postDto[]>([])
    const navigate = useNavigate();
    
    useEffect(()=>{
        (async()=>{
            const postsService = new PostService()
            const posts = await postsService.findAllPosts()
            setPosts(posts)
        })()
    },[])    

    return (
        <div style={{backgroundColor: "#ECEBE4"}} className="h-screen flex p-8">
            <LeftNavigation/>
            <article className="flex flex-col p-4 mx-16 gap-10 w-full">
                <section className="flex justify-between">
                    <section>
                        <h1 className="text-xl font-bold">Noticias</h1>
                        <label className="text-slate-600">Noticias publicadas</label>
                    </section>
                    <button onClick={()=> navigate("/admin/createNews")} className="p-2 text-white rounded-md size-10" style={{backgroundColor: "#455A64"}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 7.81818C6 6.81403 6.81403 6 7.81818 6H16.1818C17.186 6 18 6.81403 18 7.81818V16.1818C18 17.186 17.186 18 16.1818 18H7.81818C6.81403 18 6 17.186 6 16.1818V7.81818Z" fill="black" fill-opacity="0.15"/>
                            <path d="M4 12H20M12 4V20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </section>

                <ul className="w-full flex flex-col gap-4">
                    {posts.map(post => (
                        <li className="bg-white p-4 rounded-md shadow-md flex gap-2 w-full justify-between">
                            <section className="flex flex gap-2 items-center">
                                <img src={post.bannerUrl} alt={post.title} className="size-10 rounded-md"/>
                                <h3 className="text-lg">{post.title}</h3>
                            </section>
                            <section className="flex gap-2">
                                <button className="space-x-2 p-2 rounded-md hover:bg-gray-100">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 16V20H8L18 10L14 6L4 16Z" fill="black" fill-opacity="0.15"/>
                                        <path d="M12 20H20.5M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <button className="space-x-2 p-2 rounded-md hover:bg-gray-100">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 18V6H15H9H6V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18Z" fill="black" fill-opacity="0.15"/>
                                        <path d="M10 10V16M14 10V16M18 6V18C18 19.1046 17.1046 20 16 20H8C6.89543 20 6 19.1046 6 18V6M18 6H15M18 6H20M6 6H4M6 6H9M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6M15 6H9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </section>
                        </li>
                    ))}
                </ul>

            </article>
        </div>
    )
}