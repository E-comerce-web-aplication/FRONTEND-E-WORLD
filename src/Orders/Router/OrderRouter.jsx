import { Route, Routes } from "react-router-dom"
import { ListOrderPage } from "../Pages/ListOrdersPage"
import { OrderDetail } from "../Pages/OrderDetailPage"




export const OrderRouter = ()=>{
    return (
        <Routes>
            <Route path="/" element={<ListOrderPage/>}/>
            <Route path="/:id" element={<OrderDetail/>}/>
        </Routes>
    )
}