import { createNewUser, loadProfileOwner, loadProfileUserStore, loadUsers } from "./userSlice"
import { loadStores } from "../company/companySlice"

const API_URL = 'http://3.135.216.50:8080/api/v1/user'
const STORE_API_URL = "http://3.135.216.50:8080/api/v1/store"

export const userInformation = ( token )=>{
    return async ( dispatch  )=>{
        const request = await fetch(`${API_URL}/profile`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`
            } 
        })
        const response = await request.json()
       
        const stores = await fetch(`${STORE_API_URL}/${response.response.companyOwner.id}`)
        const responseStores = await stores.json()
        
        dispatch( loadStores({ stores: responseStores }) )
        if( response.session == "owner" ){
            dispatch( loadProfileOwner( { userOwner: response?.response }) )
        }
        if( response.session == "store" ){
            dispatch( loadProfileUserStore( { userStore: response?.response }) )
        }
    }
}

export const getAllUsers = ( companyId, storeId , token )=>{
    return async ( dispatch ) =>{
      const userStore =  await fetch(`${API_URL}?user_type=store&id=${storeId}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
      })
      const resUserStore = await userStore.json()
       const userCompany =  await fetch(`${API_URL}?user_type=company&id=${companyId}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${token}`
        }
       })
     
       const resUserCompany = await userCompany.json()
       dispatch( loadUsers({
        users: {
            company: resUserCompany,
            store: resUserStore
        }
       }))
    }
}


export const createUserStore = ( data, token, id )=>{
    return async ( dispatch )=>{
       try {
            const res = await fetch( `${API_URL}/create_user/store/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${ token }`
                },
                body: JSON.stringify(data)
            } )
            const req = await res.json()
            
            if(req.error !== null) return dispatch( createNewUser({
              created: true,
              error: null  
            })) 

            return dispatch( createNewUser({
                created: false,
                error: req.error
              })) 
       } catch (error) {
        console.error(error)
       }
    }
}

export const createUserCompany = ( data, token )=>{
    return async ( dispatch )=>{
        try {
            const res = await fetch( `${API_URL}/create_user/company`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${ token }`
                },
                body: JSON.stringify(data)
            } )
            const req = await res.json()
            console.log(req)
            
            if(req.error !== null) return dispatch( createNewUser({
                created: true,
                error: null  
            })) 

            return dispatch( createNewUser({
                created: false,
                error: req.error
                })) 
        } catch (error) {
            console.error(error)
        }
    }
}