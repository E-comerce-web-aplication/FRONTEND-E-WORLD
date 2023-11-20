import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
   name: 'auth',

   initialState: {
    status: 'no-registered',
    error: null,
    token: null,
    organization: null, // 'store', 'company' , 'storeOfCompany'
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
        category: null
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
        displayName: '',
        email: '',
        password: '',
        role: null
    }
   },

   reducers: {
      login: ( state, { payload } )=>{
          state.status = payload.status
          state.error = payload.error
          state.token = payload.token
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
            region: payload.region,
            category: payload.category
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
            displayName: payload.displayName,
            email: payload.email,
            password: payload.password,
            role: payload.role
        }
      },
      storeOrCompanyRegister: ( state, { payload } )=>{
        state.organization = payload.organization
      },
      signOut: ( state, { payload } )=>{
        state.status = payload.status
      }
    },
})


export const { 
    finishedOwnerForm, 
    finishedOrganizationForm, 
    finishedUserStoreForm, 
    finishedStoreForm, 
    register,
    login,
    signOut,
    storeOrCompanyRegister
} = authSlice.actions

