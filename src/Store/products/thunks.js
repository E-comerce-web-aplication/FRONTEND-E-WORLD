import { uploadImage } from "../utils/uploadImages"
import { createProduct, finishedImageForm, finishedInformationForm } from "./productSlice"


const API_URL = 'http://localhost:5167/api/Products'




export const loadInformation = ( data )=>{
    return ( dispatch )=>{
        dispatch( finishedInformationForm(data ) )
    }
}

export const loadImages = ( data )=>{
    return ( dispatch )=>{
        dispatch( finishedImageForm( {
            images: data
        } ) )
    }
}


export const createNewProduct = ()=>{
    return async ( dispatch, getState )=>{ 
        const state = getState()
        const urls = state.product.images
        let images = []

        for( let i = 0; urls.length > i; i++ ){
            const url = await uploadImage(urls[i].file, `/Products/${urls[i].id}` )
            images.push(url) 
        }

       
        const req = await fetch( API_URL, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify( {
                ...state.product.createProduct,
                Price: Number(state.product.createProduct.Price),
                Images: images
            } )
        } )

        const res = await req.json()
        console.log(res)

        dispatch( createProduct( {
            created: true,
            error: res.error
        } ) )
    }
}
