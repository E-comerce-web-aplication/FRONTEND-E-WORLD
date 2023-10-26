import { useEffect } from "react"
import { useState } from "react"



export const useForm = (initialForm = {}, validationForm = {})=>{

    const [ formState, setFormState ] = useState(initialForm)

    useEffect(()=>{
        setFormState(initialForm)
    }, [ initialForm ])


    const onInputChange = ()=>{

    }

    const onNextInput = (e, nextInput)=>{
        if( e.key === 'Enter' ){
            nextInput.current.focus()
        }
    } 


    return {
        ...formState,
        onNextInput
    }
}