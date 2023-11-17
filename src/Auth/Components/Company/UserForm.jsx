import { useRef } from "react"
import { finalizatedOwnerForm } from "../../../Store/auth/thunks"
import { useForm } from "../../../Hooks/useForm"
import { NextButton } from "../../../Common/Components/NextButton"
import { useDispatch } from "react-redux"

const initialState = {
    firstName: '',
    secondName: '',
    surname: '',
    secondSurname: '',
    email: '',
    password: '',
    dateOfBirth: '',
    description: ''
}

const validationForm = {
    firstName: [(value)=>value?.trim().length > 0 ],
    secondName: [( value )=> value?.trim().length > 0],
    surname: [( value )=> value?.trim().length > 0],
    secondSurname: [( value )=> value?.trim().length > 0],
    email: [( value )=> value?.trim().length > 0],
    password: [( value )=> value?.trim().length > 0 && value?.length > 7],
    dateOfBirth: [( value )=> value?.trim().length > 0],
    description: [( value )=> value?.trim().length > 60]
}


export const UserForm = ()=>{

    const buttonRef = useRef()
    const firstNameRef = useRef()
    const secondNameRef = useRef()
    const surnameRef = useRef()
    const secondSurnameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const dateOfBirthRef = useRef()
    const descriptionRef = useRef()
    

    const { firstName, secondName, surname, secondSurname, email, password, 
        dateOfBirth, description, disableButton, onInputChange, onNextInput} = useForm(initialState, validationForm)

    const dispatch = useDispatch()

    const onFinalizatedForm = ()=>{
        dispatch(finalizatedOwnerForm({
            displayName: `${firstName} ${secondName} ${surname} ${secondSurname}`,
            email: email,
            password: password,
            dateOfBirth: dateOfBirth,
            biography: description
        }) )
    }

    return (
        <form 
        onSubmit={(e)=>{
            e.preventDefault()
        }}
        className=" flex flex-col max-w-md gap-2 self-center mb-2">
            <section className="flex flex-col gap-1">
                <section className="flex gap-1 justify-center">
                    <div className='flex flex-col '>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[7.7rem] z-10'>
                            Primer nombre
                        </label>
                        <input
                            name='firstName'
                            value={firstName}
                            onChange={onInputChange}
                            ref={firstNameRef}
                            onKeyDown={(e)=> onNextInput(e, secondNameRef )}
                            type="text"
                            placeholder='Juan' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 
                            font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[8.7rem] z-10'>
                            Segundo nombre
                        </label>
                        <input
                            name='secondName'
                            value={secondName}
                            onChange={onInputChange}
                            ref={secondNameRef}
                            onKeyDown={(e)=>onNextInput(e, surnameRef)}
                            type="text"
                            placeholder='Carlos' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 
                            font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                </section>
                <section className="flex gap-1 justify-center">
                    <div className='flex flex-col '>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[7.9rem] z-10'>
                            Primer apellido
                        </label>
                        <input
                            name='surname'
                            value={surname}
                            onChange={onInputChange}
                            ref={surnameRef}
                            onKeyDown={(e)=>onNextInput(e, secondSurnameRef)}
                            type="text"
                            placeholder='Hernandez' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2
                            font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[8.8rem] z-10'>
                            Segundo apellido
                        </label>
                        <input
                            name='secondSurname'
                            value={secondSurname}
                            onChange={onInputChange}
                            ref={secondSurnameRef}
                            onKeyDown={(e)=>onNextInput(e, emailRef)}
                            type="text"
                            placeholder='Hernandez' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 
                            font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                </section>
            </section>

            <div className='flex flex-col self-center w-80'>
                <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-12 z-10'>Email</label>
                <input
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    ref={emailRef}
                    onKeyDown={(e)=> onNextInput(e, passwordRef)}
                    type="email"
                    placeholder='example.email@gmail.com' 
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2
                    font-bold text-black/50'/>
            </div>
            <div className='flex flex-col self-center w-80'>
                <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-20 z-10'>Password</label>
                <input
                    name='password'
                    value={password}
                    onChange={onInputChange}
                    ref={passwordRef}
                    onKeyDown={(e)=> onNextInput(e, dateOfBirthRef)}
                    type="password"
                    placeholder='**********' 
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 
                    font-bold text-black/50'/>
            </div>
            <div className='flex flex-col self-center w-80'>
                <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[10.3rem] z-10'>
                    Fecha de nacimiento
                </label>
                <input
                    name='dateOfBirth'
                    value={dateOfBirth}
                    onChange={onInputChange}
                    ref={dateOfBirthRef}
                    onKeyDown={(e)=> onNextInput(e, descriptionRef)}
                    type="date"
                    placeholder='23.45' 
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 
                    font-bold text-black/50'/>
            </div>
            <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[4.8rem] z-10'>
                        Biografia
                    </label>
                    <textarea
                    value={description}
                    onChange={onInputChange}
                    ref={descriptionRef}
                    onKeyDown={(e)=>onNextInput(e, buttonRef)}
                    name='description'
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg pt-3 h-20
                    pl-2 font-bold text-black/50'>
                    </textarea>
            </div>
            <NextButton onFinalizatedForm={onFinalizatedForm} disableButton ={disableButton}  nextRef={buttonRef} next={1}/>
        </form>
                
    )
}