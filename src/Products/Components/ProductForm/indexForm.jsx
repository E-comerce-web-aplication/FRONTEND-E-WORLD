import { useContext } from "react"
import { ProductInformation } from "./ProductInformation"
import { StepForm } from "./stepForm"
import { ImageForm } from "./ImageForms"
import { ProductContext }  from "../../Context/ProductContext"

export const IndexForm = ()=>{
    const { nextForm } = useContext(ProductContext)

    const onChangeForm = (step)=>{
        if (step === 0){
           return (
                <>
                  <StepForm steps={0}/>
                  <ProductInformation/>
                </>
            )
        }
        if( step === 1 ){
            return (
                <>
                <StepForm steps={1}/>
                <ImageForm/>
                </>
            )
        }
    }

    return (
        <>
        {
            onChangeForm(nextForm)
        }
        </>
    )
}