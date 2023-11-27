import { Route, Routes } from "react-router-dom"
import { PurcharsePage } from "../Pages/PurcharsesPage"
import { CreatePurcharsePage } from "../Pages/CreatePurcharsePage"
import { ConfirmationPage } from "../Pages/ConfirmationPage"



export const PurcharseRouter = ()=>{
    return (
        <Routes>
            <Route path="/" element={ <PurcharsePage/> }/>
            <Route path="/create" element={ <CreatePurcharsePage/> }/>
            <Route path="/create/confirmation" element={<ConfirmationPage/>}/>
        </Routes>
    )
}