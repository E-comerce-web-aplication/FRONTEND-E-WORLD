import { Route, Routes } from "react-router-dom"
import { HomeCompanyPage } from "../Pages/HomeCompanyPage"
import { InformationCompanyPage } from "../Pages/InformationCompanyPage"
import { UpdateCompanyPage } from "../Pages/UpdateCompanyPage"




export const CompanyRouter = ()=>{
    return(
        <Routes>
            <Route path="/" element={<HomeCompanyPage/>}/>
            <Route path="/information" element={<InformationCompanyPage/>}/>
            <Route path="/update" element={<UpdateCompanyPage/>}/>
        </Routes>
    )
}