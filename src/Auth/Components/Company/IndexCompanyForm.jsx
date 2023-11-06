import { useContext } from "react"
import { FormsCompany } from "./FormCompany"
import { ProductContext } from "../../../Products/Context/ProductContext"


export const IndexCompanyForm = ()=>{
    const { nextForm } = useContext(ProductContext)

    const onChangeForm = (step)=>{
        return FormsCompany[`step${step}`]
    }

    return (
        <>
        {
            onChangeForm(nextForm)
        }
        </>
    )
}