import { createSlice } from '@reduxjs/toolkit'


export const orderSlice = createSlice({
   name: 'order',

   initialState: {
     orders: [],
     created: false,
     error: null,
     confirmated: false,
   },

   reducers: {
    loadOrders: ( state, { payload } )=>{
        state.orders = payload.orders
    },
    createNewOrder: ( state, { payload } )=>{
        state.created = payload.created
        state.error = payload.error
    },
    confirmationOrder: ( state, { payload } )=>{
        state.confirmated = payload.confirmated,
        state.error = state.error
    }
},
})


export const { loadOrders, createNewOrder, confirmationOrder } = orderSlice.actions