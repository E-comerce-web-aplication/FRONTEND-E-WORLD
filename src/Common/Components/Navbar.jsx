import { NavLink } from "react-router-dom"
import { Bars3Icon, ChevronDoubleUpIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

import { ShopiLogo } from "../../icons/ShopiLogo"
import { useState } from "react"
import { Modal } from "./Modal"
import { OrderModal } from "./OrderModal"
import {  useSelector } from "react-redux"
import { AuthenticatedProfile } from "./AuthenticatedComponents"

export const Navbar = ()=>{

    

    const { status } = useSelector( state => state.auth )
    const { organizationSession } = useSelector( state => state.user )
    
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
                <NavLink className="ml-5 cursor-pointer basis-[48%]" to="/Home">
                   <ShopiLogo whereIcon="menu" color="white"/>
                </NavLink>
                <AuthenticatedProfile status={status}/>
                {
                    (organizationSession === "store" || organizationSession === "storeOfCompany") && (
                        <NavLink onClick={()=>setOpenModal(!openModal)} className="self-center hover:scale-[1.02]">
                            <span className="absolute text-black/9s0 font-bold">0</span>
                        <ShoppingBagIcon className="text-white h-10"/>
                        </NavLink>
                    )
                }
            </div>

            <div className={`${openMenu === true ? "absolute z-20 flex flex-col bg-theme w-full top-[4.1rem]" : "hidden sm:block w-56"} pt-2`}>
               <div className="flex flex-col gap-2 font-bold text-lg ">
                    <li className="self-center text-white border-white border-2 p-1 rounded-lg hover:scale-[1.02] w-32 text-center">
                        <NavLink to="/Products">
                            Productos
                        </NavLink>
                    </li>
                    {
                        organizationSession === 'owner' && (
                            <>
                            <li className="self-center text-white border-white border-2 p-1 rounded-lg hover:scale-[1.02] w-32 text-center">
                                <NavLink to="/inventory">
                                    Inventario
                                </NavLink>
                            </li>
                            <li className="self-center text-white border-white border-2 p-1 rounded-lg hover:scale-[1.02] w-32 text-center">
                                <NavLink to="/users">
                                    Usuarios
                                </NavLink>
                            </li>
                            <li className="self-center text-white border-white border-2 p-1 rounded-lg hover:scale-[1.02] w-32 text-center">
                                <NavLink to="/stores">
                                    Tiendas
                                </NavLink>
                            </li>
                        
                            <li className="self-center text-white border-white border-2 p-1 rounded-lg hover:scale-[1.02] w-32 text-center">
                                <NavLink to="/orders">
                                    Pedidos
                                </NavLink>
                            </li>
                            <li className="self-center text-white border-white border-2 p-1 rounded-lg hover:scale-[1.02] w-32 text-center">
                                <NavLink to="/purcharse">
                                    Compras
                                </NavLink>
                            </li>
                            </>
                        )
                    }
                    {
                        organizationSession === 'store' && (
                            <li className="self-center text-white border-white border-2 p-1 rounded-lg hover:scale-[1.02] w-32 text-center">
                            <NavLink to="/orders/create_order">
                                Hacer pedido
                            </NavLink>
                        </li>
                        )
                    }
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