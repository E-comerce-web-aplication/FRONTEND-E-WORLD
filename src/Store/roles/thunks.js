import { createNewRole, loadRoles } from "./roleSlice"

const API_URL = 'http://localhost:3000/api/v1/roles'

export const getAllRoles = ( organization, id )=>{
    return async ( dispatch )=>{
        const req = await fetch(`${API_URL}/roles?organization=${organization}&id=${id}`)
        const res = await req.json()
        
        dispatch( loadRoles({
            roles: res
        }))
        
        
    }
}

export const addNewRole = ( data ,organization, id )=>{
    return async ( dispatch )=>{
        const req = await fetch(`${API_URL}/${organization}?id=${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const res = await req.json()
        dispatch( createNewRole({
            created: true,
            error: res.error
        }) )
    }
}