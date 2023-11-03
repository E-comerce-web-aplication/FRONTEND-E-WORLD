import { Route, Routes } from "react-router-dom"
import { InventoryCompanyPage, InventoryStorePage, OptionPage } from "../Pages"



export const InventoryRouter = ()=>{
    return (
        <Routes>
            <Route path="/" element={<OptionPage/>}/>
            <Route path="/company" element={<InventoryCompanyPage/>}/>
            <Route path="/store" element={<InventoryStorePage/>}/>
        </Routes>
    )
}