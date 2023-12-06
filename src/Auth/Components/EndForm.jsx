import { Link, NavLink, useNavigate} from "react-router-dom"
import { ShopiLogo } from '../../icons/ShopiLogo'
import { useDispatch, useSelector } from "react-redux"
import { RegisterCompany } from "../../Store/auth/thunks"
import { useEffect } from "react"
import { ArrowUturnLeftIcon, XCircleIcon } from "@heroicons/react/24/solid"
import { cleaningCreated } from "../../Store/auth/authSlice"


export const EndForm = ()=>{
    const { owner, company, store, userStore, created } = useSelector( state => state.auth )

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(()=>{
        dispatch( RegisterCompany( {
            owner: owner,
            company: company,
            store: store,
            userStore: userStore
        }))
    },[ ])
    
    useEffect(()=>{
        if( created === true ) 
        {
            setTimeout(()=>{
                navigate({
                    pathname: '/auth/login'
                })
            }, 2000)
        }
    }, [ created === true ])

    return (
       <>
       {
         created === true 
         ? (
            <section className="flex flex-col gap-2">
                <h2 className="self-center border-2 font-bold text-3xl p-1 m-1 mt-2 text-center border-dashed border-theme text-theme rounded-lg md:text-4xl">Bienvenido a Es Shopi!!</h2>
                <NavLink className="bg-theme h-52 rounded-xl self-center mt-11 animate-bounce" to="/">
                  <ShopiLogo whereIcon="auth" color="white"/>
                </NavLink>
                <p className="self-center p-1 font-bold border-2 border-dashed border-black/80 m-1 rounded-lg md:w-[28rem] md:text-2xl">Bienvenido a Es Shopi esperamos que puedas disfrutar nuestro servicio y poder ayudarte a crecer </p>
            </section>
         )
         : 
         (
            <section className="self-center flex flex-col gap-1">
                <Link to="/auth/SigIn" className="border-2 w-24 text-center rounded-lg flex gap-1 p-1 border-green-600 justify-center hover:scale-[1.02] cursor-pointer">
                  <ArrowUturnLeftIcon className="h-6 text-green-600 "/>
                  <p className="font-bold text-green-600">volver</p>
                </Link>
                <div className="flex flex-col gap-1 border-2 p-1 m-1 rounded-lg border-dashed border-red-600">
                  <XCircleIcon className="text-red-600 animate-loading h-96"/>
                  <p className="text-xl font-bold bg-red-600 text-white p-1 rounded-md text-center">Hubo un error al registar tu compañia</p>
                </div>
                
            </section>
         )
       }
       </>
    )
}