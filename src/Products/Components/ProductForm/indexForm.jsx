import { useContext } from "react"
import { ProductInformation } from "./ProductInformation"
import { ImageForm } from "./ImageForms"
import { ProductContext }  from "../../Context/ProductContext"
import { FormLayout } from "../../../Layout/FormLayout"
import { EndForm } from "./EndForm"

export const IndexForm = ()=>{
    const { nextForm } = useContext(ProductContext)

    const onChangeForm = (step)=>{
        if (step === 0){
           return (
                <FormLayout step={3}>
                  <ProductInformation/>
                </FormLayout>
            )
        }
        if( step === 1 ){
            return (
                <FormLayout step={3}>
                  <ImageForm/>
                </FormLayout>
            )
        }
        if( step === 2 ){
            return (
                <FormLayout step={3}>
                  <EndForm/>
                </FormLayout>
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