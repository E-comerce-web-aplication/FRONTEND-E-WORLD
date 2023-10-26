import { Route, Routes } from 'react-router-dom'
import { CreateProductPage, HomeProductPage } from '../Pages'
import { DetailProductPage } from '../Pages/DetailProductPage'


export const ProductRouter = ()=>{
    return (
        <Routes>
            <Route path='/' element={<HomeProductPage/>}/>
            <Route path='/create' element={<CreateProductPage/>}/>
            <Route path='/:id' element={<DetailProductPage/>}/>
        </Routes>
    )
}