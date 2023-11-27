import { createSlice } from '@reduxjs/toolkit'


export const inventorySlice = createSlice({
   name: 'inventory',

   initialState: {
    inventoryCompany: []
   },

   reducers: {
      loadInventoryCompany: ( state, { payload })=>{
        state.inventoryCompany = payload.inventoryCompany
      }
},
})


export const { loadInventoryCompany } = inventorySlice.actions