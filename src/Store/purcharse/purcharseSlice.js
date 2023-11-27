import { createSlice } from '@reduxjs/toolkit'


export const purcharseSlice = createSlice({
   name: 'purcharse',

   initialState: {
      Total: 0,
      Products: [],
      ProviderId: "6562f540932a61210a00714b",
      CompanyId: 0,
      UserId: 0,
      error: null,
      created: false,
      Purcharses: []
   },

   reducers: {
      loadPurcharses: ( state, { payload } )=>{
         state.Purcharses = payload.purcharses
      },
      createPurcharse: ( state, { payload } )=>{
         state.created = payload.created,
         state.error = payload.error
      },
      productLoad: ( state, { payload } )=>{
         state.Products = payload.Products
      }
   },
})


export const { loadPurcharses, createPurcharse, productLoad } = purcharseSlice.actions