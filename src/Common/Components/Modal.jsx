import { createPortal } from "react-dom"




export const Modal = ({ children })=>{
    return createPortal(
        <div className="absolute border-l-2 border-b-2 p-1 h-[30rem] w-[12.4rem] top-16 right-0 bg-white border-theme rounded-lg ">
            { children }
        </div>,
        document.getElementById("modal")
    )
}