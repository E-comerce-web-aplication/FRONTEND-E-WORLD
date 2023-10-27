import { Route, Routes } from "react-router-dom"
import { ProfilePage } from "../Pages/ProfilePage"



export const UserRouter = ()=>{
    return(
        <Routes>
            <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
    )
}