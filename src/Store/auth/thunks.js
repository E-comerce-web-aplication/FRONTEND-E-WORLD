import { loadSession } from "../users/userSlice"
import { finishedOrganizationForm, finishedOwnerForm, finishedStoreForm,
     finishedUserStoreForm, login, register, storeOrCompanyRegister} from "./authSlice"


const urlAPI = 'http://localhost:3000/api/v1/auth'

export const RegisterCompany = ( ownerCompany )=>{

    return async ( dispatch )=>{

       try {
        const req = await fetch(`${urlAPI}/register_company`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( ownerCompany )
        })

        const data = await req.json()
        dispatch( register({
            status: 'registered',
            error: data.error
        }) )

       } catch (error) {
        console.log(error)
        dispatch( register({
            status: 'no-registered',
            error: error
        }) )
       }
    }
}

export const RegisterStore = ( ownerStore )=>{

    return async ( dispatch )=>{

       try {
        const req = await fetch(`${urlAPI}/register_store`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( ownerStore )
        })

        const data = await req.json()
        console.log('la data',data)
        dispatch( register({
            status: 'registered',
            error: data.error
        }) )

       } catch (error) {
        console.log(error)
        dispatch( register({
            status: 'no-registered',
            error: error
        }) )
       }
    }
}

export const loginRegister = ( data )=>{
    return async ( dispatch )=>{
        try {
            const res = await fetch( `${urlAPI}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( data )
            } )
            const dataBack = await res.json()
            console.log("dara",dataBack)

            if( dataBack.error !== null ){
                return dispatch( login({
                    status: 'no-authenticated',
                    error: dataBack.error
                }))
            }

            dispatch( login({
                status: 'authenticated',
                token: dataBack.token,
                error: null
            }))

            return dispatch( loadSession({
                organizationSession: dataBack.session
             }) )
        } catch (error) {
            dispatch( login({
                status: 'no-authenticated',
                error: error
            }))
        }

    }
}

export const finalizatedOwnerForm = (data)=>{
   
    return ( dispatch )=>{ 

        dispatch( finishedOwnerForm(data) )
    }
}

export const finalizatedOrganizationForm = (data)=>{
    
    return ( dispatch )=>{

        dispatch(finishedOrganizationForm({
            ...data,
            category: parseInt(data.category)
        }))
    }
}

export const finalizatedStoreForm = (data)=>{
    return ( dispatch )=>{

        dispatch(finishedStoreForm(data))
    }
}

export const finalizatedUserStoreForm = (data)=>{
    return (dispatch )=>{

        dispatch(finishedUserStoreForm({
            ...data,
            role: parseInt(data.role)
        }))
    }
}

export const StoreOrCompanyOptionForm = (data)=>{
    return (dispatch )=>{
        dispatch(storeOrCompanyRegister( data ))
    }
}