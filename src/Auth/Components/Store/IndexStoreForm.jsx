import { useContext } from "react"
import { ProductContext } from "../../../Products/Context/ProductContext"
import { forms } from "./FormStore"

export const IndexStoreForm = ()=>{

    const { nextForm } = useContext(ProductContext)

    const onChangeForm = (step)=>{
        return forms[`step${step}`]
    }
   
    return (
        <>
        {
            onChangeForm(nextForm)
        }
        </>
    )
}