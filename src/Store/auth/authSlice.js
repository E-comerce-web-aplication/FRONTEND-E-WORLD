import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
   name: 'auth',

   initialState: {
    status: 'no-registered',
    error: null,
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
          state.status = 'authenticated'
      },

      register: ( state, { payload } )=>{
        state.status = payload.status
        state.error = payload.error
      },

      finishedOwnerForm: ( state, { payload })=>{
       
        const itemOwner = state.owner

        state.owner = {
            [itemOwner.displayName]: payload.displayName,
            [itemOwner.dateOfBirth]: payload.dateOfBirth,
            [itemOwner.email]: payload.email,
            [itemOwner.password]: payload.password,
            [itemOwner.biography]: payload.biography
        }
       
      },

      finishedOrganizationForm: ( state, { payload } )=>{
        const itemCompany = state.company

        state.company = {
            [itemCompany.companyName]: payload.companyName,
            [itemCompany.category]: payload.category,
            [itemCompany.address]: payload.address,
            [itemCompany.review]: payload.review,
            [itemCompany.city]: payload.city,
            [itemCompany.postalCode]: payload.postalCode,
            [itemCompany.region]: payload.region
        }
      },

      finishedStoreForm: ( state, { payload } )=>{
        const itemStore = state.store

        state.store = {
            [itemStore.storeName]: payload.storeName,
            [itemStore.address]: payload.address,
            [itemStore.review]: payload.review,
            [itemStore.city]: payload.city,
            [itemStore.postalCode]: payload.postalCode,
            [itemStore.region]: payload.region
        }

      },

      finishedUserStoreForm: ( state, { payload } )=>{
        const itemUserStore = state.userStore

        state.userStore = {
            [itemUserStore.userName]: payload.userName,
            [itemUserStore.email]: payload.email,
            [itemUserStore.password]: payload.password,
            [itemUserStore.role]: payload.role
        }

      }
    },
})


export const { 
    finishedOwnerForm, 
    finishedOrganizationForm, 
    finishedUserStoreForm, 
    finishedStoreForm, 
    register
} = authSlice.actions

