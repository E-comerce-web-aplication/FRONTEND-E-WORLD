import { loadCompanies, loadOneCompany, preloadOneCompany, updateCompany } from "./companySlice"

const API_URL = "http://3.135.216.50/api/v1/company"

export function getAllCompanies ( token ) {
    return async ( dispatch )=>{
        const req = await fetch(API_URL, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        const res = await req.json()

        dispatch( loadCompanies({ companyList: res }) )
    }
}

export function getInformationCompany ( token ) {
    return async ( dispatch )=>{
        const req = await fetch(`${API_URL}/information`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        const res = await req.json()
        dispatch( preloadOneCompany(res) )
    }
}

export function updateCompanyInformation ( token, data ) {
    return async ( dispatch )=>{
        console.log('a', data)
        const req = await fetch(API_URL, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        const res = await req.json()
        
        if( res.error !== null) {
            dispatch( updateCompany( {
                error: res.error,
                updated: false
            }))

            dispatch( preloadOneCompany(res))
        }

        dispatch( updateCompany({
            error: null,
            updated: true
        }) )

    }
}


// export const loadImformationCompany = ( token, data )=>{
//     return async ( dispatch )=>{
//         dispatch( loadOneCompany( data ))
//         updateCompany( token, data )
//     }
// }