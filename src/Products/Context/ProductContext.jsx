import { createContext, useState } from 'react'



export const ProductContext = createContext()


export const ProductProvider = ({ children })=>{
    const [ nextForm, setNextForm ] = useState(0)
    

    const [ step, setStep ] = useState({
        step1: false,
        step2: false,
        step3: false
    })
    
    const onStep = ( stepNumber )=>{
        setStep({
            ...step,
            [`step${stepNumber}`]:true
        })
    }


    const onNextForm = (form)=>{
        setNextForm(form)
    }


    return (
        <ProductContext.Provider value={{
            onNextForm,
            nextForm,
            onStep,
            step
        }} >
            { children }
        </ProductContext.Provider>
    )
}