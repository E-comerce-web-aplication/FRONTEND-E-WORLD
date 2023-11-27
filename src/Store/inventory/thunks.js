import { loadInventoryCompany } from "./inventorySlice"


const API_URL ="http://localhost:5167/api/inventory"


export const getInventoryCompany = ( companyId )=>{
    return async ( dispatch )=>{
        const req = await fetch(`${API_URL}/companies/${companyId}`)
        const res = await req.json()
        dispatch( loadInventoryCompany( {
            inventoryCompany: res
        }) )
    }
}