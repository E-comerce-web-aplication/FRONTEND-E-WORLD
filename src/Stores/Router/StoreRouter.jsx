import { Route, Routes } from "react-router-dom"
import { ListStorePage } from "../Pages/ListStorePage"
import { CreateStorePage } from "../Pages/CreateStorePage"



export const StoreRouter = ()=>{
    return (
        <Routes>
            <Route path="/" element={<ListStorePage/>}/>
            <Route path="/create_store" element={<CreateStorePage/>}/>     
        </Routes>
    )
}