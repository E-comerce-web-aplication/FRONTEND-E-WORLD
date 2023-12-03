import { Route, Routes } from "react-router-dom"
import { ProfilePage } from "../Pages/ProfilePage"
import { UserPage } from "../Pages/UsersPage"
import { CreateUserPage } from "../Pages/CreateUserPage"



export const UserRouter = ()=>{
    return(
        <Routes>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/" element={<UserPage/>}/>
            <Route path="/create_user" element={<CreateUserPage/>}/>
        </Routes>
    )
}