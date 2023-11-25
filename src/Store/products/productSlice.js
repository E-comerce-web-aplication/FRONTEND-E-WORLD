import { createSlice } from '@reduxjs/toolkit'


export const productSlice = createSlice({
   name: 'product',

   initialState: {
     productList: [],
     createProduct: {
       ProductName: '',
       Title: '',
       Price: 0,
       SendConditions: '',
       Description: '',
       Tags: [],
       CompanyId: 0
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
      state.createProduct.Title = payload.title
      state.createProduct.CompanyId = payload.companyId
    },
    finishedImageForm: ( state, { payload } )=>{
      state.images = payload.images
    },
    createProduct: ( state, { payload } )=>{
      state.created = payload.created
      state.error = payload.error
    },
    loadProducts: ( state, { payload } )=>{
      state.productList = payload.products
    },
    updateProducts: ()=>{

    }
  },
})


export const { createProduct, loadProducts, updateProducts, finishedImageForm, finishedInformationForm  } = productSlice.actions