import { Route, Routes } from "react-router-dom"



export const RouterApp = ()=>{
    return (
        <Routes>
            <Route path="/" element={<> hi</>}/>
        </Routes>
    )
}