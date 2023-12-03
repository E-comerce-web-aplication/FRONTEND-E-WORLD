import { Route, Routes } from "react-router-dom"
import { CommonRouter } from "../Common"
import { ProductRouter } from "../Products/Router/ProductRouter"
import { UserRouter } from "../Users"
import { AuthRouter } from "../Auth"
import { OrderRouter } from "../Orders"
import { InventoryRouter } from "../Inventory"
import { RegisterRouter } from "../Registers/Router/RegisterRouter"
import { PrivateRouter } from "./PrivateRouter"
import { CompanyRouter } from "../Companies"
import { PurcharseRouter } from "../Purcharse"
import { RolesRouter } from "../Roles"
import { StoreRouter } from "../Stores"

export const RouterApp = ()=>{
    return (
        <Routes>
            <Route path="/" element={<CommonRouter/>}/>
            <Route path="/auth/*" element={<AuthRouter/>}/>
            <Route path="/purcharse/*" element={
                <PrivateRouter>
                    <PurcharseRouter/>
                </PrivateRouter>
            }/>

            <Route path="/products/*" element={
                <PrivateRouter>
                    <ProductRouter/>
                </PrivateRouter>
            }/>
            <Route path="/users/*" element={
                <PrivateRouter>
                    <UserRouter/>
                </PrivateRouter>
            }/>
            <Route path="/orders/*" element={
                <PrivateRouter>
                    <OrderRouter/>
                </PrivateRouter>
            }/>
            <Route path="/registers/*" element={<RegisterRouter/>}/>
            <Route path="/inventory/*" element={
                <PrivateRouter>
                    <InventoryRouter/>
                </PrivateRouter>
            }/>

            <Route path="/company/*" element={
                <PrivateRouter>
                    <CompanyRouter/>
                </PrivateRouter>
            }/>

            <Route path="/roles/*"  element={
                <RolesRouter/>
            }/>

            <Route path="/stores/*" element={<StoreRouter/>}/>
        </Routes>
    )
}