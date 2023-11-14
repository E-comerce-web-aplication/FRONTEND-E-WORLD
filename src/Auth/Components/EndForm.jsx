import { NavLink} from "react-router-dom"
import { ShopiLogo } from '../../icons/ShopiLogo'
import { useDispatch, useSelector } from "react-redux"
import { RegisterCompany } from "../../Store/auth/thunks"
import { useEffect } from "react"


export const EndForm = ()=>{
    const { owner, company, store, userStore } = useSelector( state => state.auth )

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch( RegisterCompany( {
            owner: owner,
            company: company,
            store: store,
            userStore: userStore
        }))
    },[ ])
    

    return (
        <section className="flex flex-col gap-2">
            <h2 className="border-2 font-bold text-3xl p-1 m-1 mt-2 text-center border-dashed border-theme text-theme rounded-lg">Bienvenido a Es Shopi!!</h2>
             <NavLink className="bg-theme h-52 rounded-xl self-center mt-11 animate-bounce" to="/">
               <ShopiLogo whereIcon="auth" color="white"/>
            </NavLink>
            <p className="self-center p-1 font-bold border-2 border-dashed border-black/80 m-1 rounded-lg">Bienvenido a Es Shopi esperamos que puedas disfrutar nuestro servicio y poder ayudarte a crecer </p>
        </section>
    )
}