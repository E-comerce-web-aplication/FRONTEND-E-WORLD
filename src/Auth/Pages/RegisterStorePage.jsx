import { useState } from "react"
import { ProductProvider } from "../../Products/Context/ProductContext"
import { IndexStoreForm } from "../Components/Store/IndexStoreForm"



export const RegisterStorePage = ()=>{

    const [ nextStep, setNextStep ] = useState({
        step1: false,
        step2: false,
        step3: false,
        step4: false
    })

    
    const onChangeNextStep = (step)=>{
        setNextStep({
            ...nextStep,
            [`step${step}`]: true 
        })
    }
    

  
    return (
        <ProductProvider>
            <main className="flex flex-col justify-center">
              <IndexStoreForm onChangeNextStep={onChangeNextStep}/>
            </main>
        </ProductProvider>
    )
}