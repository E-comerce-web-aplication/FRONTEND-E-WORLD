import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
   name: 'user',

   initialState: {
      organizationSession: null, // 'store', 'company' , 'storeOfCompany' 
      userStore: {

      },
      userOwner: {
         
      }
   },

   reducers: {
      loadProfileOwner: ( state, { payload } )=>{
         state.userOwner = payload.userOwner
      },
      loadProfileUserStore: ( state, { payload } )=>{

      }
},
})


export const { loadProfileOwner, loadProfileUserStore } = userSlice.actions