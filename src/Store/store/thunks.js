import { addStore, loadStores } from "./storeSlice"


const API_URL = 'http://localhost:3000/api/v1/store'



export const createNewStore = ( data, companyId )=>{
    return async ( dispatch )=>{
        const req = await fetch(`${API_URL}/create_store?id=${companyId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const res = await req.json()
        dispatch( addStore({
            created: true,
            error: res.error
        }) )
    }
}

export const getAllStores = ( companyId )=>{
    return async ( dispatch )=>{
        const req = await fetch(`${API_URL}/${companyId}`)
        const res = await req.json()

        dispatch( loadStores({
            stores: res
        }))
    }
}