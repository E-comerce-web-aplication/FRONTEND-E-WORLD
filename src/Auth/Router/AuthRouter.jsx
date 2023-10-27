import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../Pages/LoginPage"
import { SigInPage } from "../Pages/RegisterPage"


export const AuthRouter = ()=>{
    return (
        <Routes>
            <Route path="/Login" element={<LoginPage/>}/>
            <Route path="/SigIn" element={<SigInPage/>}/>
        </Routes>
    )
}