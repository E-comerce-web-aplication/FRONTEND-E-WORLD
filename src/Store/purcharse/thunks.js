import { createPurcharse, loadPurcharses, productLoad } from "./purcharseSlice"

const API_URL ="http://localhost:5167/api/Purchase"

export const createNewPurcharse = (data)=>{
    return async ( dispatch )=>{
        const req = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( data )
        })

         await req.json()
        dispatch( createPurcharse({
            created:true,
            error: null
        }) )
    }
}

export const loadProducts = ( product )=>{
   return ( dispatch )=>{
    const products = []
    if( product.length > 0 ){
        product.map((product)=>{
            products.push({
                ProductId: product?.id,
                Price: product?.price,
                Quantity: product?.quantity
            })
        })
    }
    dispatch( productLoad({
        Products: products
    }) )
  }
}

export const getPurcharses = ( companyId )=>{
    return async ( dispatch )=>{
        const req = await fetch(`${API_URL}/company/${companyId}`)
        const res = await req.json()
        
        dispatch( loadPurcharses({
            purcharses: res
        }) )
    }
}