import { Route, Routes } from "react-router-dom"
import { ListRolesPage } from "../Pages/ListRolesPage"
import { CreateRolePage } from "../Pages/CreateRolePage"




export const RolesRouter = ()=>{
    return (
        <Routes>
            <Route path="/" element={<ListRolesPage/>}/>
            <Route path="/create_role" element={<CreateRolePage/>}/>
        </Routes>
    )
}