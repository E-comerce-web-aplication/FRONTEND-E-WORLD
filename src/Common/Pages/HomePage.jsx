import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { CommonLayout } from '../../Layout'
import { CreateCompanyButton } from '../Components'


export const HomePage = () => {
    const dispatch =useDispatch()
    const { status } = useSelector( state => state.auth )

    const onSigOut = ()=>{
        dispatch( signOut({ 
            status: 'no-authenticated'
        }) )
    }

    return (
        <CommonLayout>
            {
                    status !== 'authenticated' && (
                        <li
                        className="hidden sm:flex text-white self-center font-bold absolute right-1 top-0">
                                <NavLink to="/auth/logIn" className="h-16 w-20 pt-3 pl-1 text-2xl border-2 p-1 bg-theme rounded-md border-white hover:scale-[1.02]">
                                    LogIn
                                </NavLink>
                                <NavLink to="/auth/SigIn" className="h-16 w-20 pt-3 pl-1 text-2xl border-2 p-1 bg-theme rounded-md border-white hover:scale-[1.02]">
                                    SigIn
                                </NavLink>
                        </li>
                    )
                }
            <CreateCompanyButton/>
        </CommonLayout>
    )
}