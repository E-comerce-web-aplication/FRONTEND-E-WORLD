import { useEffect, useRef, useState } from "react"
import { NextButton } from "../../../Common/Components/NextButton"
import { finalizatedUserStoreForm } from "../../../Store/auth/thunks"
import { useForm } from "../../../Hooks/useForm"
import { useDispatch } from "react-redux"


const initialState = {
    displayName: '',
    email: '',
    password: '',
    role: 'Administrador'
}

const validationForm = {
    displayName: [(value)=>value?.trim().length > 0 ],
    email: [( value )=> value?.trim().length > 0],
    password: [( value )=> value?.trim().length > 7],
    role: [( value )=> value?.trim().length > 0]
}

export const UserStoreForm = ()=>{
    const [ roles, setRoles ] = useState([])

    useEffect(()=>{ 
        const getRole = async ()=>{
            const req = await fetch('http://3.135.216.50:8080/api/v1/roles/default')
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

    const { displayName, email, password, onInputChange, onNextInput, disableButton,
           setDisableButton, formState} = useForm( initialState, validationForm )

    useEffect(()=>{
        setDisableButton(false)
    }, [])   

    const dispatch = useDispatch()

    const onFinalizatedForm = ()=>{
        dispatch( finalizatedUserStoreForm(formState) )
    }
   
    return (
        <section className="flex flex-col">
            <h2 className="border-2 font-bold text-center text-2xl m-1 p-1 rounded-lg border-theme text-theme">Crea un usuario para tu tienda</h2>
            <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[9.4rem] z-10'>
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
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
            </div>
            <div className='flex flex-col self-center w-80'>
                <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-12 z-10'>Email</label>
                <input
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    ref={emailRef}
                    onKeyDown={(e)=>onNextInput(e, passwordRef)}
                    type="email"
                    placeholder='example.email@gmail.com' 
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
            </div>
            <div className='flex flex-col self-center w-80'>
                <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-20 z-10'>Password</label>
                <input
                    name='password'
                    value={password}
                    onChange={onInputChange}
                    ref={passwordRef}
                    onKeyDown={(e)=>onNextInput(e, roleRef)}
                    type="password"
                    placeholder='**********' 
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
            </div>
            <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[7.86rem] z-10'>Role de usuario</label>
                    <select
                    name='role'
                    onChange={onInputChange}
                    ref={roleRef}
                    onKeyDown={(e)=>onNextInput(e, buttonRef)}
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 bg-white' id="">
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
            <section className="flex flex-col gap-1 m-1 mt-2 self-center w-80">
               <NextButton   disableButton={disableButton} next={4} onFinalizatedForm={onFinalizatedForm} nextRef={buttonRef} />    
            </section>
        </section>
    )
}