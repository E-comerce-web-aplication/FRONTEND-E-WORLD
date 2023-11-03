import { useContext } from "react"
import { ProductContext } from "../../Products/Context/ProductContext"
import { createArray } from "../../helpers/createArray"


export const StepForm = ({ steps })=>{
    const { step } = useContext(ProductContext)

    const stepNumber = createArray(steps)

    return (
        <section className="self-center flex flex-row"> 
            {
                stepNumber.map((s)=>(
                    <div className="flex flex-row">
                        <p className={`${ step['step1'] === true ? "border-green-500 bg-green-500 text-white": " border-black/50 text-black/60" } 
                        font-bold pt-[2px] rounded-[100%] w-8 h-8 text-center border-2`}>{s}</p>
                        <div className="w-10 bg-black/50 h-1 self-center">
                            <div className={`h-1 ${ step['step1'] === true && "animate-progress  bg-green-500"} `}></div>
                        </div>
                    </div>
                ))
            }
            <div className="flex flex-row">
            <p className={`${ step['step3'] === true ? "border-green-500 bg-green-500 text-white": " border-black/50 text-black/60" } 
                font-bold pt-[2px] rounded-[100%] w-8 h-8 text-center border-2`}>{steps}</p>
            </div>
        </section>
    )
}