import { Route, Routes } from "react-router-dom"
import { HomeCompanyPage } from "../Pages/HomeCompanyPage"




export const CompanyRouter = ()=>{
    return(
        <Routes>
            <Route path="/" element={<HomeCompanyPage/>}/>
        </Routes>
    )
}