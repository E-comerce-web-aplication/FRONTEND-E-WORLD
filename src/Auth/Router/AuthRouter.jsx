import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../Pages/LoginPage"
import { RegisterStorePage } from "../Pages/RegisterStorePage"
import { RegisterCompanyPage } from "../Pages/RegisterCompanyPage"
import { SigInPage } from "../Pages/SigInPage"


export const AuthRouter = ()=>{
    return (
        <Routes>
            <Route path="/LogIn" element={<LoginPage/>}/>
            <Route path="/SigIn" element={<SigInPage/>} />
            <Route path="/Register_Store" element={<RegisterStorePage/>}/>
            <Route path="/Register_Company" element={<RegisterCompanyPage/>}/>
        </Routes>
    )
}