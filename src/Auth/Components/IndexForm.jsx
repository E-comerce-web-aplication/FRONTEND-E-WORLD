import { forms } from "./Forms"

export const IndexForm = ({ nextForm })=>{

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