import { loadCompanies } from "./companySlice"

const API_URL = "http://localhost:3000/api/v1/company"

export function getAllCompanies ( token ) {
    return async ( dispatch )=>{
        const req = await fetch(API_URL, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        const res = await req.json()
        console.log(res)

        dispatch( loadCompanies({ companyList: res }) )
    }
}