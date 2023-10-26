import { NavLink } from "react-router-dom"
import { Bars3Icon, ChevronDoubleUpIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'

import { ShopiLogo } from "../../icons/ShopiLogo"
import { useState } from "react"

export const Navbar = ()=>{
    const [ openMenu, setOpenMenu ] = useState(false)

    const onOpenMenu = ()=>{
        setOpenMenu(!openMenu)
    }

    const onCloseMenu = ()=>{
        setOpenMenu(false)
    }

    return (
        <ul className="flex flex-col bg-theme">
            <div className="flex gap-1 border-b-2 border-white"> 
                <Bars3Icon onClick={onOpenMenu} className="self-center text-white cursor-pointer h-10"/>    
                <NavLink className="ml-5 cursor-pointer basis-[65%]" to="/">
                   <ShopiLogo color="white"/>
                </NavLink>
                <NavLink className="self-center hover:scale-[1.02]">
                    <span className="absolute text-black/9s0 font-bold">0</span>
                   <ShoppingBagIcon className="text-white h-10"/>
                </NavLink>
            </div>
            <div className={`${!openMenu ? "hidden" : "z-20 absolute flex flex-col bg-theme w-full top-[3.6rem]"} pt-2`}>
               <div className="flex flex-col gap-2 font-bold text-lg ">
                    <li className="self-center text-theme bg-white p-1 rounded-lg hover:scale-[1.02] w-24 text-center">
                        <NavLink to="/Products">
                            Productos
                        </NavLink>
                    </li>
                    <li className="self-center text-theme bg-white p-1 rounded-lg hover:scale-[1.02] w-24 text-center">
                        <NavLink >
                            Inventario
                        </NavLink>
                    </li>
                    <li className="self-center text-theme bg-white p-1 rounded-lg hover:scale-[1.02] w-24 text-center">
                        <NavLink >
                            Products
                        </NavLink>
                    </li>
               </div>
              <ChevronDoubleUpIcon onClick={onCloseMenu} className="mt-2 self-center h-9 text-theme bg-white w-full border-2 border-theme cursor-pointer"/>
            </div>
        </ul>
    )
}