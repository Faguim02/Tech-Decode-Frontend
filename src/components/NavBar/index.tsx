import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import Cookies from 'cookies-ts'
import { Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { MdOutlineMenu } from 'react-icons/md';

export const NavBarComponent = () => {

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
            

            <DrawerBody>
                <form onSubmit={handleSearchPost}>
                    <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Pesquisar' className='px-5 py-2 border-solid border-2 border-slate-100 rounded-md utline outline-offset-2 outline-2 outline-slate-100'/>
                </form>
            </DrawerBody>

            <DrawerFooter>
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
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </nav>
  )
}
