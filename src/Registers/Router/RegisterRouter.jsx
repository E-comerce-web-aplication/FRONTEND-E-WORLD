import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../Pages/RegisterPage"




export const RegisterRouter = ()=>{
    return (
        <Routes>
            <Route path="/" element={<RegisterPage/>}/>
        </Routes>
    )
}