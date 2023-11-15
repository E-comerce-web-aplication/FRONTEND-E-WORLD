import { loadProfileOwner } from "./userSlice"


const API_URL = 'http://localhost:3000/api/v1/user'

export const ownerInformation = ( token )=>{
    return async ( dispatch  )=>{
        const request = await fetch(`${API_URL}/profile`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`
            } 
        })
        const response = await request.json()

        dispatch( loadProfileOwner( { userOwner: response  }) )
    }
}