import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
   name: 'auth',

   initialState: {
    status: 'no-registered',
    error: null,
    organization: null,
    owner: {
        displayName: '',
        dateOfBirth: '',
        email: '',
        password: '',
        biography: ''
    },
    company: {
        companyName: '',
        review: '',
        address: '',
        postalCode: '',
        city: '',
        region: '',
        category: 2
    },
    store: {
        storeName: '',
        review: '',
        address: '',
        region: '',
        city: '',
        postalCode: ''
    },
    userStore: {
        userName: '',
        email: '',
        password: '',
        role: ''
    }
   },

   reducers: {
      login: ( state, { payload } )=>{
          state.status = payload.status
          state.error = payload.error
      },

      register: ( state, { payload } )=>{
        state.status = payload.status
        state.error = payload.error
      },

      finishedOwnerForm: ( state, { payload })=>{
        state.owner = {
            displayName: payload.displayName,
            dateOfBirth: payload.dateOfBirth,
            email: payload.email,
            password: payload.password,
            biography: payload.biography
        }
       
      },

      finishedOrganizationForm: ( state, { payload } )=>{
        state.company = {
            companyName: payload.companyName,
            category: payload.category,
            address: payload.address,
            review: payload.review,
            city: payload.city,
            postalCode: payload.postalCode,
            region: payload.region
        }
      },

      finishedStoreForm: ( state, { payload } )=>{
        state.store = {
            storeName: payload.storeName,
            address: payload.address,
            review: payload.review,
            city: payload.city,
            postalCode: payload.postalCode,
            region: payload.region
        }

      },

      finishedUserStoreForm: ( state, { payload } )=>{
        state.userStore = {
            userName: payload.userName,
            email: payload.email,
            password: payload.password,
            role: payload.role
        }
      },
      storeOrCompanyRegister: ( state, { payload } )=>{
        state.organization = payload.organization
      }
    },
})


export const { 
    finishedOwnerForm, 
    finishedOrganizationForm, 
    finishedUserStoreForm, 
    finishedStoreForm, 
    register,
    storeOrCompanyRegister
} = authSlice.actions

