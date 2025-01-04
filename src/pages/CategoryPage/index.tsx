import { useEffect, useState } from "react";
import { NavBarComponent } from "../../components/NavBar";
import { categoryDto } from "../../dtos/CategoryDto";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryService } from "../../services/api/categoryService";
import PostService from "../../services/api/postService";
import { SearchPost } from "../SearchPage/components/SearchPost";

export default function CategoryPage() {

    const [categories, setCategories] = useState<categoryDto[]>([]);
    const [category, setCategory] = useState<categoryDto | null>(null);
    
    const navigate = useNavigate();
    const { id } = useParams() as {id: string};

    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
        (async()=>{    
            const categories = await new CategoryService().findAllCategories();

            if(categories === null) {
            return;
            }
            
            setCategories(categories)

            const category = await new PostService().findByCategory(id);
            setCategory(category);

            console.log(category)
        })()
    },[id])
    
    return (
        <div>
            <NavBarComponent category={categories}/>

            <h1 className="p-8 text-xl font-bold text-slate-800">{category?.title}</h1>

            <ul className='flex flex-wrap px-8 py-4 gap-4'>
                {categories.map(category => (
                <li key={category.id} onClick={()=> navigate(`/category/${category.id}`)} className='p-4 bg-slate-100 rounded-lg shadow-sm cursor-pointer hover:bg-slate-200 active:bg-slate-300'>{category.name}</li>
                ))}
            </ul>

            <ul className='px-8 py-4 min-h-screen rounded-md space-y-6'>
                    {category != null && category.postModels?.map(post => (
                        <SearchPost bannerUrl={post.bannerUrl} id={post.id} title={post.title} date_at={post.date_at} key={post.id}/>
                    ))}
                </ul>
        </div>
    );
}