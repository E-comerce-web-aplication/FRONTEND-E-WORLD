import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
   name: 'user',

   initialState: {
      organizationSession: null, // 'store', 'company' , 'storeOfCompany' 
      userStore: {},
      userOwner: {},
      userCompany: {}
   },

   reducers: {
      loadSession: ( state, { payload } )=>{
         state.organizationSession = payload.organizationSession
      },
      loadProfileOwner: ( state, { payload } )=>{
         state.userOwner = payload.userOwner
      },
      loadProfileUserStore: ( state, { payload } )=>{
         state.userStore = payload.userStore
      }
},
})


export const { loadProfileOwner, loadProfileUserStore, loadSession } = userSlice.actions