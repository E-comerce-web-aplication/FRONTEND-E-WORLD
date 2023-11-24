import { useDispatch, useSelector } from "react-redux"
import { createNewProduct } from "../../../Store/products/thunks"
import { useEffect } from "react"


export const EndForm = ()=>{
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch( createNewProduct() )
    }, [])
    
    return (
        <>
            felicidades terminaste
        </>
    )
}