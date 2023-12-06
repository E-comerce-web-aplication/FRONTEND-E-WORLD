import { Route, Routes } from "react-router-dom"
import { HomePage } from "../Pages/HomePage"
import { HomeShopiPage } from "../Pages/HomeShopiPage"


export const CommonRouter = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/Home" element={<HomeShopiPage/>}/>
        </Routes>
    )
}