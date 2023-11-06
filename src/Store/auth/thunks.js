import { finishedOrganizationForm, finishedOwnerForm, finishedStoreForm, finishedUserStoreForm, register} from "./authSlice"


const urlAPI = 'http://localhost:3000/api/v1/auth/register_company'

export const RegisterCompany = ( data )=>{

    return async ( dispatch )=>{

       try {
        const req = await fetch(urlAPI, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( data )
        })

        const data = req.json()

        dispatch( register({
            status: 'registered',
            error: null
        }) )

       } catch (error) {
        dispatch( register({
            status: 'no-registered',
            error: error
        }) )
       }
    }
}

export const finalizatedOwnerForm = (data)=>{
   
    return ( dispatch, getState )=>{ 

        const state = getState()
        dispatch( finishedOwnerForm({
            ...state.auth,
            owner: data
        }) )
    }
}

export const finalizatedOrganizationForm = (data)=>{
    
    return ( dispatch, getState )=>{

        const state = getState()
        
        dispatch(finishedOrganizationForm({
            ...state.auth,
            company: data
        }))
    }
}

export const finalizatedStoreForm = (data)=>{
    return ( dispatch, getState )=>{
        const state = getState()
        dispatch(finishedStoreForm({
            ...state.auth,
            store: data
        }))
    }
}

export const finalizatedUserStoreForm = (data)=>{
    return (dispatch, getState)=>{
        const state = getState()

        dispatch(finishedUserStoreForm({
            ...state.auth,
            userStore: data
        }) )
    }
}