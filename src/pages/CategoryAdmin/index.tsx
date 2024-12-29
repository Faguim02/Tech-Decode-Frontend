import { useEffect, useState } from "react";
import LeftNavigation from "../../components/LeftNavigation";
import { categoryDto } from "../../dtos/CategoryDto";
import { CategoryService } from "../../services/api/categoryService";

export default function CategoryAdmin() {

    const [categories, setCategories] = useState<categoryDto[]>([]);

    useEffect(()=>{
        (async()=>{

            const categories = await new CategoryService().findAllCategories();

            if(categories === null) {
                return;
            }
            
            setCategories(categories)
            })()
    },[])

    return (
        <div style={{backgroundColor: "#ECEBE4"}} className="h-screen flex p-8">
            <LeftNavigation/>
            <article className="flex flex-col p-4 mx-16 gap-10 w-full">
                <section className="flex justify-between">
                    <section>
                        <h1 className="text-xl font-bold">Categorias</h1>
                        <label className="text-slate-600">Categorias criadas</label>
                    </section>
                    <button className="p-2 text-white rounded-md size-10" style={{backgroundColor: "#455A64"}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 7.81818C6 6.81403 6.81403 6 7.81818 6H16.1818C17.186 6 18 6.81403 18 7.81818V16.1818C18 17.186 17.186 18 16.1818 18H7.81818C6.81403 18 6 17.186 6 16.1818V7.81818Z" fill="black" fill-opacity="0.15"/>
                            <path d="M4 12H20M12 4V20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </section>

                <ul className="flex flex-wrap gap-4">
                    {categories.map(category => (
                        <li className="inline-flex max-w-max shrink-0 items-center text-white text-sm font-medium px-3 py-1 rounded-md gap-4" style={{backgroundColor:"#2C2C2C"}}>
                            <span>{category.name}</span>
                            <button>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12M4 4L12 12" stroke="#F5F5F5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </li>
                    ))}
                </ul>

            </article>
        </div>
    )
}