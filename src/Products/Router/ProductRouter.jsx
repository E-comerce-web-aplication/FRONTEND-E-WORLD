import { Route, Routes } from 'react-router-dom'
import { CreateProductPage, HomeProductPage } from '../Pages'
import { DetailProductPage } from '../Pages/DetailProductPage'
import { PrivateRouter } from './PrivateRouter'


export const ProductRouter = ()=>{
    return (
        <Routes>
            <Route path='/' element={<HomeProductPage/>}/>
            <Route path='/create' element={
                <PrivateRouter session="store">
                    <CreateProductPage/>
                </PrivateRouter>
            }/>
            <Route path='/:id' element={<DetailProductPage/>}/>
        </Routes>
    )
}