import { IndexCompanyForm } from "../Components/Company/IndexCompanyForm"
import { ProductContext, ProductProvider } from "../../Products/Context/ProductContext"
import {  useState } from "react"



export const RegisterCompanyPage = ()=>{

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

    const onInputChange = ({ target })=>{
       
    }

    return (
        <ProductProvider>
            <IndexCompanyForm 
            onChangeNextStep={onChangeNextStep}/>
        </ProductProvider>
    )
}