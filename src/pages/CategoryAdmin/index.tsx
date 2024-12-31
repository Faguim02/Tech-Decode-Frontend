import { useEffect, useState } from "react";
import LeftNavigation from "../../components/LeftNavigation";
import { categoryDto } from "../../dtos/CategoryDto";
import { CategoryService } from "../../services/api/categoryService";
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react";
import { ErrorMessageDto } from "../../dtos/ErrorMessageDto";

export default function CategoryAdmin() {

    const [categories, setCategories] = useState<categoryDto[]>([]);
    const [title, setTitle] = useState<string>("");
    const {isOpen, onClose, onOpen} = useDisclosure();

    const toast = useToast();

    useEffect(()=>{
        (async()=>{

            const categories = await new CategoryService().findAllCategories();

            if(categories === null) {
                return;
            }
            
            setCategories(categories)
            })()
    },[])

    async function handleCreateCategory() {
        const data = {title} as categoryDto;
        const category = await new CategoryService().createCategory(data) as ErrorMessageDto;

        if(category.status === 201) {
            setCategories([...categories, {name: title} as categoryDto]);
            onClose();

            toast({
                title: category.title,
                status: "success",
                duration: 3000,
                isClosable: true,
            })

            setTitle("");

            return;
        }

        toast({
            title: category.title,
            description: category.message,
            status: "error",
            duration: 3000,
            isClosable: true,
        });

        setTitle("");
    }

    async function handleDeleteCategory(id: string) {
        const category = await new CategoryService().deleteCategory(id) as ErrorMessageDto;

        if(category.status === 200) {
            const newCategories = categories.filter(category => category.id !== id);
            setCategories(newCategories);

            toast({
                title: category.title,
                status: "success",
                duration: 3000,
                isClosable: true,
            })

            return;
        }

        toast({
            title: category.title,
            description: category.message,
            status: "error",
            duration: 3000,
            isClosable: true,
        });
    }

    return (
        <div style={{backgroundColor: "#ECEBE4"}} className="h-screen flex p-8">
            <LeftNavigation/>
            <article className="flex flex-col p-4 mx-16 gap-10 w-full">
                <section className="flex justify-between">
                    <section>
                        <h1 className="text-xl font-bold">Categorias</h1>
                        <label className="text-slate-600">Categorias criadas</label>
                    </section>
                    <button onClick={onOpen} className="p-2 text-white rounded-md size-10" style={{backgroundColor: "#455A64"}}>
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
                            <button onClick={() => handleDeleteCategory(category.id as string)}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12M4 4L12 12" stroke="#F5F5F5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </li>
                    ))}
                </ul>

            </article>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Criar Categoria</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <input type="text" placeholder="Categoria" onChange={(e) => setTitle(e.target.value)} value={title} className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100 w-full' required/>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button variant='ghost' onClick={handleCreateCategory}>Criar</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}