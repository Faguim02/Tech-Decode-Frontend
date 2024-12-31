import { useEffect, useState } from "react";
import { CategoryService } from "../../services/api/categoryService";
import { categoryDto } from "../../dtos/CategoryDto";
import { Spinner, useToast } from "@chakra-ui/react";
import PostService from "../../services/api/postService";
import { ErrorMessageDto } from "../../dtos/ErrorMessageDto";
import { postDto } from "../../dtos/PostDto";
import { useNavigate } from "react-router-dom";

export default function CreateNewsAdmin() {

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [font, setFont] = useState<string>("");
    const [file, setFile] = useState<File>();

    const [categorys, setCategories] = useState<categoryDto[]>([])
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    const toast = useToast();

    useEffect(()=>{
        (async()=>{
            const categorys = await new CategoryService().findAllCategories()

            if(categorys === null) {
                return;
            }
            
            setCategories(categorys)
        })()
    },[])

    const handleChange = (e: any) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const preview = document.getElementById('image-preview') as HTMLImageElement;
                if (preview) {
                    preview.src = reader.result as string;
                    preview.style.display = 'block';
                }
            };
            reader.readAsDataURL(file);
            setFile(file);
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        const data = {
            title,
            description,
            category: {   id: category},
            font
        } as postDto

        const response = await new PostService().createPost(data, file as File) as ErrorMessageDto;

        if(response.status !== 201) {
            setLoading(false);
            toast({
                title: (response as ErrorMessageDto).title,
                description: (response as ErrorMessageDto).message,
                status: "error",
                duration: 9000,
                isClosable: true,
            })

            setTitle("");
            setDescription("");
            setCategory("");
            setFont("");
            setFile(undefined);
            return;
        }

        setLoading(false);
        toast({
            title: "Noticia criada com sucesso",
            status: "success",
            duration: 9000,
            isClosable: true,
        })

        navigate('/admin/news')

    }

    return (
        <div className="flex w-full h-screen p-8 justify-center items-center"  style={{backgroundColor: "#ECEBE4"}}>
            <form className="flex flex-col gap-4 w-1/3" onSubmit={handleSubmit}>

                <div>
                    <div className="flex flex-col items-center">
                        <label htmlFor="file-upload" className="px-5 py-2 border-solid border-2 border-slate-100 rounded-md cursor-pointer hover:bg-slate-200">
                            Enviar Imagem
                        </label>
                        <input id="file-upload" type="file" accept="image/*" className="hidden" onChange={handleChange} />
                        <img id="image-preview" className="mt-4 w-24 h-24 object-cover rounded-md" style={{ display: 'none' }} />
                    </div>
                </div>

                <input type="text" placeholder="Titulo" onChange={(e) => setTitle(e.target.value)} value={title} className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100' required/>
                <textarea placeholder="Descrição" onChange={(e) => setDescription(e.target.value)} value={description} className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100' required/>
                <input type="text" placeholder="Creditos" onChange={(e) => setFont(e.target.value)} value={font} className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100' required/>

                <select onChange={(e) => setCategory(e.target.value)} value={category} className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100' required>
                    {categorys.map(category => (
                        <option value={category.id} key={category.id} className="text-slate-500 font-semibold text-sm rounded-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500">
                            <span>{category.name}</span>
                        </option>
                    ))}
                </select>

                <button type="submit" className='px-5 py-2 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500' style={{backgroundColor: '#7880B5'}}>
                  {loading ? <Spinner size='sm' /> : 'Enviar'}
                </button>

            </form>
        </div>
    );
}