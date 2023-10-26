import { Route, Routes } from "react-router-dom"
import { CommonRouter } from "../Common"
import { ProductRouter } from "../Products/Router/ProductRouter"


export const RouterApp = ()=>{
    return (
        <Routes>
            <Route path="/" element={<CommonRouter/>}/>
            <Route path="/products/*" element={<ProductRouter/>}/>
        </Routes>
    )
}