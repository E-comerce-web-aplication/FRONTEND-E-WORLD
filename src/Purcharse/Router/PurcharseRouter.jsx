import { Route, Routes } from "react-router-dom"
import { PurcharsePage } from "../Pages/PurcharsesPage"
import { CreatePurcharsePage } from "../Pages/CreatePurcharsePage"



export const PurcharseRouter = ()=>{
    return (
        <Routes>
            <Route path="/" element={ <PurcharsePage/> }/>
            <Route path="/create" element={ <CreatePurcharsePage/> }/>
        </Routes>
    )
}