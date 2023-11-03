import { Route, Routes } from "react-router-dom"
import { CommonRouter } from "../Common"
import { ProductRouter } from "../Products/Router/ProductRouter"
import { UserRouter } from "../Users"
import { AuthRouter } from "../Auth"
import { OrderRouter } from "../Orders"
import { InventoryRouter } from "../Inventory"
import { RegisterRouter } from "../Registers/Router/RegisterRouter"

export const RouterApp = ()=>{
    return (
        <Routes>
            <Route path="/" element={<CommonRouter/>}/>
            <Route path="/auth/*" element={<AuthRouter/>}/>
            <Route path="/products/*" element={<ProductRouter/>}/>
            <Route path="/users/*" element={<UserRouter/>}/>
            <Route path="/orders/*" element={<OrderRouter/>}/>
            <Route path="/registers/*" element={<RegisterRouter/>}/>
            <Route path="/inventory/*" element={<InventoryRouter/>}/>
        </Routes>
    )
}