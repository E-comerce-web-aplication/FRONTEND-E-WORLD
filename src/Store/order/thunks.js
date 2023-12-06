import { confirmationOrder, loadOrders } from "./orderSlices"


const API_URL = 'http://3.149.254.125/api/Orders'

export const getAllOrders = ( storeId )=>{
    return async ( dispatch )=>{
        try {
            const req = await fetch(`${API_URL}?storeId=${ storeId }`)
            const res = await req.json()
        
            dispatch( loadOrders({
                orders: res
            }) )
        } catch (error) {
          dispatch( loadOrders({
            orders: []
          }) ) 
        }
    }
}


export const confirmatedOrder = ( orderId )=>{
    return async ( dispatch )=>{
       const req = await fetch(`${API_URL}?orderId=${ orderId }`, {
        method: 'POST'
       })   
       const res = await req.json()
       dispatch( confirmationOrder({
        confirmated: true,
        error:null
       }) )
    }
}


export const createOrder = ()=>{
    return async ( dispatch )=>{
        
    }
}