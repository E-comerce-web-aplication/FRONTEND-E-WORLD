import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { CheckBadgeIcon } from "@heroicons/react/24/outline"
import { createNewProduct } from "../../../Store/products/thunks"


export const EndForm = ()=>{
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch( createNewProduct() )
    }, [])
    
    return (
        <div className="flex flex-col h-[70vh]">
            <h2 className="text-2xl text-center text-green-600 font-bold">Producto Creado con exito</h2>
            <CheckBadgeIcon className="text-green-600"/>
        </div>
    )
}