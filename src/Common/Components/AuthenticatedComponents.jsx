import { NavLink } from "react-router-dom"
import { ArrowLeftOnRectangleIcon, ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useDispatch } from "react-redux"
import { signOut } from "../../Store/auth/authSlice"


export const AuthenticatedProfile = ({ status })=>{
    const dispatch =useDispatch()

    const onSigOut = ()=>{
        dispatch( signOut({ 
            status: 'no-authenticated'
        }) )
    }

    return (
        <>
        { 

        status === 'authenticated' ? 
        (
            <>
                
                <NavLink className=" self-center flex flex-col basis-[22%] bg-white border-2 border-black/30 rounded-2xl hover:scale-[1.02]"
                to="/users/profile"
                >
                    <UserCircleIcon className="h-[2.2rem] text-theme pl-7 self-end"/>
                </NavLink>
                <ArrowLeftOnRectangleIcon 
                onClick={onSigOut}
                className="self-center h-11 text-white mr-1 cursor-pointer"/>
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