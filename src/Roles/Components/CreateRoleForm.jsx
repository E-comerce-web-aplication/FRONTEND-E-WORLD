import { useEffect, useRef } from "react"
import { useForm } from "../../Hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { addNewRole } from "../../Store/roles/thunks"
import { useLocation, useNavigate } from "react-router-dom"
import { createNewRole } from "../../Store/roles/roleSlice"
import { CheckBadgeIcon } from "@heroicons/react/24/solid"

const initialState = {
    roleName: '',
    description: '',
    permissions: ''
}

const validationForm = {
    roleName: [(value)=>value?.trim().length > 5 ],
    description: [( value )=> value?.trim().length > 25],
    permissions: [( value )=> value?.trim().length > 0],
}

export const CreateRoleForm = ()=>{

    const { created } = useSelector( state => state.role )
    const navigate = useNavigate()

    const buttonRef = useRef()
    const roleNameRef = useRef()
    const descriptionRef = useRef()
    const permissionsRef = useRef()
    const { search } = useLocation()
    

    const { roleName, description, permissions, onInputChange, onNextInput,
           disableButton, setDisableButton, formState } = useForm( initialState, validationForm )

    useEffect(()=>{
        setDisableButton(false)
    },[])

    const dispatch = useDispatch()

    const onCreate = ()=>{
        let permission;

        if( permissions === 'todos los permisos' ){
            permission = 'all'
        }
        if ( permissions === 'solo lectura' ){
            permission = 'read'
        }
        if ( permissions === 'solo escritura' ){
            permission = 'write'
        }

        dispatch( addNewRole({
            roleName: roleName,
            description: description,
            permissions: permission
        }, 'store',search.slice(7) ) )

        setTimeout(()=>{
            dispatch( createNewRole({
                created: false,
                error: null
            }) )

            navigate({
                pathname: '/roles/'
            })
        },1000)
    }
  

    return (
        <section className="flex flex-col justify-center self-center">
            <h2 className="border-2 font-bold self-center w-96 text-3xl text-center m-1 p-1 rounded-lg border-theme text-theme md:ml-16">Agrega un nuevo role</h2>
            <section className="flex flex-col gap-1">
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[8.25rem] z-10 md:text-xl md:w-[11rem]'>Nombre del role</label>
                    <input
                        name='roleName'
                        value={roleName}
                        ref={roleNameRef}
                        onChange={onInputChange}
                        onKeyDown={(e)=>onNextInput(e, descriptionRef)}
                        type="text"
                        placeholder='Administrador' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 md:w-96 md:h-14'/>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-24 z-10 md:text-xl md:w-32'>Descripcion</label>
                    <textarea
                        name='description'
                        value={description}
                        ref={descriptionRef}
                        onChange={onInputChange}
                        onKeyDown={(e)=>onNextInput(e, permissionsRef)}
                        type="text"
                        placeholder='Descripcion de el role' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-24 pl-2 font-bold text-black/50 pt-2 md:w-96'/>
                </div>
            <div className='flex flex-col self-center w-80'>
                <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[10.1rem] z-10 md:text-xl md:w-[14rem]'>Permisos de usuario</label>
                <select
                name='permissions'
                onChange={onInputChange}
                ref={permissionsRef}
                value={permissions}
                onKeyDown={(e)=>onNextInput(e, buttonRef)}
                className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 bg-white md:w-96 md:h-14' id="">
                    <option>todos los permisos</option> 
                    <option>solo lectura</option> 
                    <option>solo escritura</option> 
                </select>
             </div>
            </section>
            <button
            disabled={!disableButton}
            onClick={onCreate}
            className={
                `${ disableButton === true ? "bg-theme border-theme": "bg-black/20" }
                w-80 font-bold text-xl m-1 self-center h-10 border-2 rounded-lg text-white hover:scale-[1.02] md:h-16 md:w-96 md:ml-16`
            }>Agregar role</button>
           { created !== false && (
                <div className="absolute bg-white top-36 z-30 border-2 rounded-lg self-center">
                    <CheckBadgeIcon className="text-green-600"/>
                    <p className="m-1 text-green-600 font-bold">Tu Usuario ha sido creado perfectamente</p>
                </div>
            )}
            
        </section>
    )
}