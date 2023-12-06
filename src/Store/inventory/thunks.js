import { loadInventoryCompany } from "./inventorySlice"


const API_URL ="http://3.149.254.125/api/inventory"


export const getInventoryCompany = ( companyId )=>{
    return async ( dispatch )=>{
        const req = await fetch(`${API_URL}/companies/${companyId}`)
        const res = await req.json()
        dispatch( loadInventoryCompany( {
            inventoryCompany: res
        }) )
    }
}