import { useState } from "react"
import { ProductInformation } from "./ProductInformation"
import { StepForm } from "./stepForm"



export const IndexForm = ()=>{

    const [ nextForm, setNextForm ] = useState(0)

    const onChangeForm = (step)=>{
        if (step === 0){
           return (
                <>
                  <StepForm steps={0}/>
                  <ProductInformation/>
                </>
            )
        }
    }

    return (
        <>
        {
            onChangeForm(0)
        }
        </>
    )
}