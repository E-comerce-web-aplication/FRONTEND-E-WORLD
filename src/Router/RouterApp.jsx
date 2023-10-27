import { Route, Routes } from "react-router-dom"
import { CommonRouter } from "../Common"
import { ProductRouter } from "../Products/Router/ProductRouter"
import { UserRouter } from "../Users"
import { AuthRouter } from "../Auth"

export const RouterApp = ()=>{
    return (
        <Routes>
            <Route path="/" element={<CommonRouter/>}/>
            <Route path="/auth/*" element={<AuthRouter/>}/>
            <Route path="/products/*" element={<ProductRouter/>}/>
            <Route path="/users/*" element={<UserRouter/>}/>
        </Routes>
    )
}