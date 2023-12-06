import { Route, Routes } from "react-router-dom"
import { ListOrderPage } from "../Pages/ListOrdersPage"
import { CreateOrderPage } from "../Pages/CreateOrderPage"
import { OrdersUnconformitedPage } from "../Pages/OrdersUnconformitedPage"




export const OrderRouter = ()=>{
    return (
        <Routes>
            <Route path="/" element={<ListOrderPage/>}/>
            <Route path="/order/:id" element={<OrdersUnconformitedPage/>}/>
            <Route path="/create_order" element={<CreateOrderPage/>}/>
        </Routes>
    )
}