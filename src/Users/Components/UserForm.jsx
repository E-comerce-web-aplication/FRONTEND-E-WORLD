import { useEffect, useRef, useState } from "react"
import { useForm } from "../../Hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { createUserStore, createUserCompany } from "../../Store/users/thunks"
import { CheckBadgeIcon } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"
import { createNewUser } from "../../Store/users/userSlice"

const initialState = {
    displayName: '',
    email: '',
    password: '',
    organization: '',
    role: 'Administrador'
}

const validationForm = {
    displayName: [(value)=>value?.trim().length > 0 ],
    email: [( value )=> value?.trim().length > 0],
    password: [( value )=> value?.trim().length > 7],
    role: [( value )=> value?.trim().length > 0]
}

export const UserForm = ()=>{
    const [ roles, setRoles ] = useState([])


    const { token } = useSelector( state => state.auth )
    const { created, userOwner } = useSelector( state => state.user )
    const navigate = useNavigate()

    useEffect(()=>{ 
        const getRole = async ()=>{
            const req = await fetch('http://localhost:3000/api/v1/roles/default')
            const res = await req.json()
            setRoles(res)
        }
        
       getRole()
    },[ ])

    const buttonRef = useRef()
    const userNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const roleRef = useRef()
    const organizationRef = useRef()

    const { displayName, email, password,role, onInputChange, onNextInput,organization, disableButton,
           setDisableButton, formState} = useForm( initialState, validationForm )

    useEffect(()=>{
        setDisableButton(false)
    }, [])   

    const dispatch = useDispatch()

    const onCreate = ()=>{
        if(organization == 'Tienda' ){
            dispatch( createUserStore({
                displayName: displayName,
                password: password,
                email: email,
                role: role
            }, token, userOwner?.companyOwner?.id ) )
        }
        dispatch( createUserCompany({
            displayName: displayName,
            password: password,
            email: email,
            role: role
        }, token ) )

        setTimeout(()=>{
            navigate({
                pathname: '/users/'
            })
        },1000)
    }

    useEffect(()=>{
        dispatch( createNewUser({
            created: false,
            error: null
        }) )
    }, [])

   
    return (
        <section className="flex flex-col self-center">
            <h2 className="border-2 font-bold text-center text-2xl m-1 p-1 rounded-lg border-theme text-theme md:text-3xl">Crea un usuario para tu organizacion</h2>
            <div className='flex flex-col self-center w-80 md:w-[29rem]'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[9.9rem] z-10 md:w-[13rem] md:text-xl'>
                        Nombre del usuario
                        </label>
                    <input
                        name='displayName'
                        value={displayName}
                        onChange={onInputChange}
                        ref={userNameRef}
                        onKeyDown={(e)=>onNextInput(e, emailRef)}
                        type="text"
                        placeholder='Juan Carlos Estrada sustre' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 md:h-14 md:text-lg'/>
            </div>
            <div className='flex flex-col self-center w-80 md:w-[29rem]'>
                <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-14 z-10 md:text-lg'>Email</label>
                <input
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    ref={emailRef}
                    onKeyDown={(e)=>onNextInput(e, passwordRef)}
                    type="email"
                    placeholder='example.email@gmail.com' 
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50
                     md:h-14 md:text-lg'/>
            </div>
            <div className='flex flex-col self-center w-80 md:w-[29rem]'>
                <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-20 z-10 md:w-24 md:text-lg'>Password</label>
                <input
                    name='password'
                    value={password}
                    onChange={onInputChange}
                    ref={passwordRef}
                    onKeyDown={(e)=>onNextInput(e, roleRef)}
                    type="password"
                    placeholder='**********' 
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-
                    black/50 md:h-14 md:text-lg'/>
            </div>
            <div className='flex flex-col self-center w-80 md:w-[29rem]'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[7.86rem] z-10 md:w-[10rem] md:text-lg'>Role de usuario</label>
                    <select
                    name='role'
                    onChange={onInputChange}
                    ref={roleRef}
                    onKeyDown={(e)=>onNextInput(e, organizationRef)}
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 
                    bg-white md:h-14 md:text-lg' id="">
                        <option>...elegir un role</option>
                       {
                        roles.map((role)=>(
                            <option
                            value={role.id}
                            key={role.id} >{ role.roleName }</option> 
                        ))
                       }    
                      
                    </select>
             </div>
             <div className='flex flex-col self-center w-80 md:w-[29rem]'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[7.3rem] z-10 md:text-lg md:w-[8rem]'>Organizacion?</label>
                    <select
                    name='organization'
                    onChange={onInputChange}
                    ref={organizationRef}
                    value={organization}
                    onKeyDown={(e)=>onNextInput(e, buttonRef)}
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 
                    bg-white md:h-14 md:text-lg' id="">
                        <option>Tienda</option> 
                        <option>Compañia</option>
                    </select>
             </div>
            <section className="flex flex-col gap-1 m-1 mt-2 self-center w-80 md:w-[29rem]">
            <button 
            onClick={onCreate}
            disabled={!disableButton}
            className={`${
                disableButton === true
                ? "  border-theme bg-theme"
                : "bg-black/20"    
            } text-xl font-bold border-2 h-10 text-white rounded-lg hover:scale-[1.02] md:h-14 md:text-2xl mb-1`}>
                Crear
            </button>
            </section>
            { created !== false && (
                <div className="absolute bg-white top-36 z-30 border-2 rounded-lg self-center">
                    <CheckBadgeIcon className="text-green-600"/>
                    <p className="m-1 text-green-600 font-bold">Tu Usuario ha sido creado perfectamente</p>
                </div>
            )}
        </section>
    )
}