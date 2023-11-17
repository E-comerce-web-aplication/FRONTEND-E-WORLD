import { createSlice } from '@reduxjs/toolkit'


export const companySlice = createSlice({
   name: 'company',

   initialState: {
    companyList: []
   },

   reducers: {
    loadCompanies: ( state, { payload } )=>{
        state.companyList = payload.companyList
    }
},
})


export const { loadCompanies  } = companySlice.actions