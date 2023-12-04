import { createSlice } from '@reduxjs/toolkit'


export const roleSlice = createSlice({
   name: 'role',

   initialState: {
    roles: [],
    created: false,
    error: null
   },

   reducers: {
    loadRoles: ( state, { payload } )=>{
        state.roles = payload.roles 
    },
    createNewRole: ( state, { payload } )=>{
        state.created = payload.created,
        state.error = payload.error
    }
},
})


export const { loadRoles, createNewRole  } = roleSlice.actions