import { loadProfileOwner, loadProfileUserStore } from "./userSlice"


const API_URL = 'http://localhost:3000/api/v1/user'

export const userInformation = ( token )=>{
    return async ( dispatch  )=>{
        const request = await fetch(`${API_URL}/profile`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`
            } 
        })
        const response = await request.json()
        if( response.session == "owner" ){
            dispatch( loadProfileOwner( { userOwner: response?.response }) )
        }
        if( response.session == "store" ){
            dispatch( loadProfileUserStore( { userStore: response?.response }) )
        }
    }
}