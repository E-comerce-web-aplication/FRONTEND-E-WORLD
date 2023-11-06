import { NavLink } from "react-router-dom"
import { Bars3Icon, ChevronDoubleUpIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/solid'

import { ShopiLogo } from "../../icons/ShopiLogo"
import { useState } from "react"
import { Modal } from "./Modal"
import { OrderModal } from "./OrderModal"

export const Navbar = ()=>{
    const [ openMenu, setOpenMenu ] = useState(false)
    const [ openModal, setOpenModal ] = useState(false)

    const onOpenMenu = ()=>{
        setOpenMenu(!openMenu)
    }

    const onCloseMenu = ()=>{
        setOpenMenu(false)
    }

    return (
        <ul className="flex flex-col bg-theme">
            <div className="flex gap-3 border-b-2 border-white"> 
                <Bars3Icon onClick={onOpenMenu} className="sm:hidden self-center text-white cursor-pointer h-10"/>    
                <NavLink className="ml-5 cursor-pointer basis-[48%]" to="/">
                   <ShopiLogo whereIcon="menu" color="white"/>
                </NavLink>
                <li className="flex gap-1 self-center text-white font-bold sm:hidden">
                    <NavLink to="/auth/logIn" className="border-2 p-1 bg-theme rounded-md border-white hover:scale-[1.02] hover:bg-white/30">
                        LogIn
                    </NavLink>
                    <NavLink to="/auth/SigIn" className="border-2 p-1 bg-theme rounded-md border-white hover:scale-[1.02] hover:bg-white/30">
                        SigIn
                    </NavLink>
                </li>
                {/* <NavLink className="self-center basis-[22%] bg-white border-2 border-black/30 rounded-2xl hover:scale-[1.02]"
                to="/users/profile"
                >
                    <UserCircleIcon className="h-[2.2rem] text-theme pl-7"/>
                </NavLink> */}
                {/* <NavLink onClick={()=>setOpenModal(!openModal)} className="self-center hover:scale-[1.02]">
                    <span className="absolute text-black/9s0 font-bold">0</span>
                   <ShoppingBagIcon className="text-white h-10"/>
                </NavLink> */}
            </div>
            <div className={`${openMenu === true ? "absolute z-20 flex flex-col bg-theme w-full top-[4.1rem]" : "hidden sm:block"} pt-2`}>
               <div className="flex flex-col gap-2 font-bold text-lg ">
                    <li className="self-center text-theme bg-white p-1 rounded-lg hover:scale-[1.02] w-24 text-center">
                        <NavLink to="/Products">
                            Productos
                        </NavLink>
                    </li>
                    <li className="self-center text-theme bg-white p-1 rounded-lg hover:scale-[1.02] w-24 text-center">
                        <NavLink to="/inventory">
                            Inventario
                        </NavLink>
                    </li>
                    <li className="self-center text-theme bg-white p-1 rounded-lg hover:scale-[1.02] w-24 text-center">
                        <NavLink to="/orders">
                            Usuarios
                        </NavLink>
                    </li>
                    <li className="self-center text-theme bg-white p-1 rounded-lg hover:scale-[1.02] w-24 text-center">
                        <NavLink to="/orders">
                            Tiendas
                        </NavLink>
                    </li>
                    <li className="self-center text-theme bg-white p-1 rounded-lg hover:scale-[1.02] w-24 text-center">
                        <NavLink to="/registers">
                            Registros
                        </NavLink>
                    </li>
                    <li className="self-center text-theme bg-white p-1 rounded-lg hover:scale-[1.02] w-24 text-center">
                        <NavLink to="/orders">
                            Orders
                        </NavLink>
                    </li>
               </div>
              <ChevronDoubleUpIcon onClick={onCloseMenu} className="mt-2 self-center h-9 text-theme bg-white w-full border-2 border-theme cursor-pointer sm:hidden"/>
             {
                openModal === true &&(
                    <Modal>
                      <OrderModal/>
                    </Modal>
                )
             }
            </div>
        </ul>
    )
}