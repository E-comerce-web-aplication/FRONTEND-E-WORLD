import { useContext } from "react"
import { ProductContext } from "../../Products/Context/ProductContext"


export const NextButton = ({ nextRef, next, disableButton, onFinalizatedForm })=>{
    const { onNextForm , onStep } = useContext(ProductContext)

    return (
        <button 
        onClick={()=>{
            onNextForm(next)
            onStep(next)
            onFinalizatedForm()
        }}
        ref={nextRef}
        disabled={disableButton === false }
        type="button"
        className={`${ disableButton === false? 
            "bg-black/50 hover:bg-black/60": 
            "bg-theme hover:bg-orange-400 hover:scale-[1.02]"} border-2 self-center min-w-[20rem] m-1 h-10 font-bold rounded-md 
         text-white text-xl  focus:outline-none focus:scale-[1.02]`}>
            Next
        </button>
    )
}