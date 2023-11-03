import { NextButton } from "../Common/Components/NextButton"
import { StepForm } from "../Common/Components/stepForm"


export const FormLayout = ({ children, step })=>{
    return (
        <div className="flex flex-col mt-2 gap-2">
            <StepForm steps={step}/>
            {
                children
            }
            <NextButton/>
        </div>
    )
}