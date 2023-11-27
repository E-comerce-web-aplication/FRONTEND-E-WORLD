import { NavLink, Link, useNavigate } from "react-router-dom"
import { CheckBadgeIcon } from "@heroicons/react/24/outline"
import { ShopiLogo } from '../../icons/ShopiLogo'
import { useForm } from '../../Hooks/useForm'
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginRegister } from "../../Store/auth/thunks"

const items = {
    email: '',
    password: ''
}

const formValidation = {
    email: [(value)=>value?.trim().length > 0],
    password: [(value)=>value?.trim().length > 0]
}

export const LoginPage = ()=>{

    const [ openProcessing, setOpenProcessing ] = useState(false)
    const [openMessageError, setOpenMessageError ] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const buttonRef = useRef()

    const { email, password, onNextInput, onInputChange } = useForm( items, formValidation )

    const login = ()=>{
        setOpenProcessing(true)
        dispatch(loginRegister( {
            email: email,
            password: password
        } ) )
    }

    const { status, error } = useSelector( state => state.auth )
    
    useEffect(()=>{
        if( status == 'authenticated' ){
            setTimeout(()=>{
                setOpenProcessing(false)
                navigate({
                    pathname: '/users/profile'
                })
            },300)
        }
        if( status === 'no-authenticated'){
            setTimeout(()=>{
                setOpenProcessing(false)
                setOpenMessageError(true)
            },300)
        }
    }, [ error ])


    return (
        <main className="flex justify-center">
            <div className="flex flex-col gap-2 pt-10">
               <NavLink className="bg-theme h-52 rounded-xl" to="/">
                <ShopiLogo whereIcon="auth" color="white"/>
               </NavLink>
                <form className=" flex flex-col max-w-md">
                    <div className='flex flex-col self-center w-80'>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-12 z-10'>
                            Email
                        </label>
                        <input
                            name='email'
                            value={email}
                            ref={emailRef}
                            onChange={onInputChange}
                            onKeyDown={(e)=>onNextInput(e,passwordRef)}
                            type="email"
                            placeholder='emai.example@gmail.com' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg 
                            h-12 pl-2 font-bold text-black/50'/>
                    </div>
                    <div className='flex flex-col self-center w-80'>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-20 z-10'>
                            Password
                        </label>
                        <input
                            name='password'
                            value={password}
                            ref={passwordRef}
                            onChange={onInputChange}
                            onKeyDown={(e)=>onNextInput(e, buttonRef)}
                            type="password"
                            placeholder='**********' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg 
                            h-12 pl-2 font-bold text-black/50'/>
                    </div>
                    {
                        openMessageError && (
                            <span className="border-2 p-1 m-1 font-bold text-red-600 text-center 
                            rounded-lg border-red-600 border-dashed">Credenciales invalidas!!</span>
                        )
                    }
                
                </form>
                <button 
                 ref={buttonRef}
                 onClick={login}
                 className="bg-theme text-white rounded-lg font-bold h-10 text-xl focus:outline-none">Login</button>    
                <section>
                <p className="flex flex-col">
                        <span className="font-bold text-sm">Aun no tienes una cuenta?</span>
                        <Link to="/auth/SigIn" className="font-bold text-sm underline text-blue-500 cursor-pointer hover:text-yellow-500">Registrate aqui</Link>
                    </p>
                </section>
            </div>
            {
                openProcessing == true && (
                    <div className="absolute flex flex-col gap-4 border-2 z-10 bg-white p-2 top-36 h-64 w-64 rounded-lg justify-center">
                   {
                     status === 'authenticated' 
                     ? (
                     <>
                     <CheckBadgeIcon className="text-green-600"/>
                     <p className="self-center text-xl text-green-600 font-bold">Bienvenido</p>
                     </>
                     ) 
                     : (
                        <>
                        <div className="self-center basis-1/2 h-[7.3rem] w-[7.3rem] animate-loading rounded-full border-[20px] "></div>
                        <p className="self-center text-lg text-green-600 font-bold">procesando</p>
                        </>
                        )
                   }
                        
                    </div>
                )
            }
        </main>
    )
}