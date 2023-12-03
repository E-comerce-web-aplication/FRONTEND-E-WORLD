import { createSlice } from '@reduxjs/toolkit'


export const companySlice = createSlice({
   name: 'company',

   initialState: {
    companyList: [],
    id: null,
    companyName: null,
    category: null,
    region: null,
    address: null,
    review: null,
    postalCode: null,
    city: null,
    updated: null,
    error: null,
    stores: []
   },

   reducers: {
    loadCompanies: ( state, { payload } )=>{
        state.companyList = payload.companyList
    },
    preloadOneCompany: ( state, { payload } )=>{
        state.companyName = payload.companyName
        state.region = payload.region
        state.address = payload.address
        state.review = payload.review
        state.postalCode = payload.postalCode
        state.city = payload.city
        state.category = payload.companyCategory.id
    },
    // loadOneCompany: ( state, { payload } )=>{
    //     state.companyName = payload.companyName
    //     state.region = payload.region
    //     state.address = payload.address
    //     state.review = payload.review
    //     state.postalCode = payload.postalCode
    //     state.city = payload.city
    //     state.category = payload.companyCategory.categoryName
    // },
    updateCompany: ( state, { payload } )=>{
        state.updated = payload.updated
        state.error = payload.error
    },
    loadStores: ( state, { payload } )=>{
        state.stores = payload.stores
    }
},
})


export const { loadCompanies, preloadOneCompany, loadOneCompany, updateCompany, loadStores  } = companySlice.actions