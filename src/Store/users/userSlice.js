import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
   name: 'user',

   initialState: {
      organizationSession: null, // 'store', 'company' , 'storeOfCompany' 
      userStore: {},
      userOwner: {},
      userCompany: {},
      users: [],
      created: false,
      error: null
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
      },
      loadUsers: ( state, { payload } )=>{
         state.users = payload.users
      },
      createNewUser:( state, { payload } )=>{
         state.created = payload.created
         state.error = payload.error
      }
},
})


export const { loadProfileOwner, loadProfileUserStore, loadSession,loadUsers, createNewUser } = userSlice.actions