import { NavLink } from "react-router-dom"
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/solid'



export const AuthenticatedProfile = ({ status })=>{

    return (
        <>
        { 

        status === 'authenticated' ? 
        (
            <>
                <NavLink className="self-center basis-[22%] bg-white border-2 border-black/30 rounded-2xl hover:scale-[1.02]"
                to="/users/profile"
                >
                    <UserCircleIcon className="h-[2.2rem] text-theme pl-7"/>
                </NavLink>
            </>
        ) : (
            <li className="flex gap-1 self-center text-white font-bold sm:hidden">
                    <NavLink to="/auth/logIn" className="border-2 p-1 bg-theme rounded-md border-white hover:scale-[1.02] hover:bg-white/30">
                        LogIn
                    </NavLink>
                    <NavLink to="/auth/SigIn" className="border-2 p-1 bg-theme rounded-md border-white hover:scale-[1.02] hover:bg-white/30">
                        SigIn
                    </NavLink>
            </li>
        )

        }
        </>
    )
}