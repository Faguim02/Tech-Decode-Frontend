import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import Cookies from 'cookies-ts'
import { Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { MdOutlineMenu } from 'react-icons/md';
import { categoryDto } from '../../dtos/CategoryDto';

interface NavBarProps {
    category: categoryDto[]
}

export const NavBarComponent = ({category}: NavBarProps) => {

    const [search, setSearch] = useState<string>()
    const [isAuth, setIsAuth] = useState<boolean>(false)

    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    useEffect(()=>{
        let token = new Cookies().get('token')
        if(token) {
            setIsAuth(true)
            return;
        }
        setIsAuth(false)
    },[isAuth])

    async function handleSearchPost(event: any) {
        event.preventDefault()

        navigate(`/search/${search}`)

    }

  return (
    <nav className='flex justify-between items-center px-5 py-2 shadow-md'>
        <figure onClick={()=>navigate('/')} className='cursor-pointer'>
            <img src={logo} alt="logo" />
        </figure>

        <div className='gap-4 hidden md:flex'>
            <form onSubmit={handleSearchPost}>
                <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Pesquisar' className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100'/>
            </form>

            {isAuth ? (
                <button onClick={()=>{
                    new Cookies().remove("token")
                    setIsAuth(false)
                }} className='px-5 py-1 bg-slate-400 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500'>
                    <FaSignOutAlt />
                </button>
            ): (
                <button onClick={()=>navigate('signIn')} className='px-5 py-1 bg-slate-400 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500'>
                    <FaRegUser/>
                </button>
            )}
            
        </div>
        <button ref={btnRef.current} onClick={onOpen} className='md:hidden'>
            <MdOutlineMenu size={30}/>
        </button>
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef.current}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            

            <DrawerBody>
                <div className='flex flex-col gap-4'>
                    <Divider/>
                    <form onSubmit={handleSearchPost}>
                        <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Pesquisar' className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100'/>
                    </form>
                    <Divider/>
                    <ul className='flex flex-col gap-2'>
                        {category.map(category => (
                            <li key={category.id} onClick={()=> navigate(`category/${category.id}`)} className='p-4 cursor-pointer hover:bg-slate-200 active:bg-slate-300'>{category.name}</li>
                        ))}
                    </ul>
                </div>

                {/* <ul className='flex flex-wrap px-8 gap-4'>
        {categories.map(category => (
          <li key={category.id} onClick={()=> navigate(`category/${category.id}`)} className='p-4 bg-slate-100 rounded-lg shadow-sm cursor-pointer hover:bg-slate-200 active:bg-slate-300'>{category.name}</li>
        ))}
      </ul> */}
            </DrawerBody>

            <DrawerFooter>
                <div className='flex flex-col gap-4 w-full'>
                    <Divider/>
                    {isAuth ? (
                        <button onClick={()=>{
                            new Cookies().remove("token")
                            setIsAuth(false)
                        }} className='px-5 py-3 bg-slate-400 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500 w-full flex items-center justify-center gap-2'>
                            <FaSignOutAlt /> Sair
                            </button>
                        ): (
                            <button onClick={()=>navigate('signIn')} className='px-5 py-3 bg-slate-400 rounded-md font-semibold shadow-md hover:bg-slate-500 active:bg-slate-400 active:ring focus:ring-slate-500 w-full flex items-center justify-center gap-2'>
                                <FaRegUser/> Entrar
                            </button>
                        )}
                </div>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </nav>
  )
}
