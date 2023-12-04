import { createSlice } from '@reduxjs/toolkit'


export const storeSlice = createSlice({
   name: 'store',

   initialState: {
     stores: [],
     created: false,
     error: null
   },

   reducers: {
    loadStores: ( state, { payload } )=>{
        state.stores = payload.stores
    },
    addStore: ( state, { payload } )=>{
      state.created = payload.created
      state.error = payload.error
    }
},
})


export const { loadStores, addStore } = storeSlice.actions