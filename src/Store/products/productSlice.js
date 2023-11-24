import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
   name: 'product',

   initialState: {
     productList: [],
     createProduct: {
       ProductName: '',
       Price: 0,
       SendConditions: '',
       Description: '',
       Tags: [],
     },
     images: [],
     created: false,
     updated: false,
     error: null
   },

   reducers: {
    finishedInformationForm: ( state, { payload } )=>{
      state.createProduct.ProductName = payload.productName
      state.createProduct.Price = payload.price
      state.createProduct.SendConditions = payload.sendConditions
      state.createProduct.Description = payload.description
    },
    finishedImageForm: ( state, { payload } )=>{
      state.images = payload.images
    },
    createProduct: ( state, { payload } )=>{
      state.created = payload.created
      state.error = payload.error
    },
    loadProducts: ()=>{

    },
    updateProducts: ()=>{

    }
  },
})


export const { createProduct, loadProducts, updateProducts, finishedImageForm, finishedInformationForm  } = productSlice.actions