import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userInformation } from "../../Store/users/thunks"
import { useState } from "react"



export const UserInformation = ()=>{

    const [ organization , setOrganization ] = useState(null)
    const dispatch = useDispatch()
    const { token } = useSelector( state => state.auth )
    
    useEffect(()=>{
        dispatch( userInformation( token ) )
    }, [])

    const { userOwner, organizationSession, userStore } = useSelector( state => state.user )

    useEffect(()=>{
        if( userOwner.companyOwner !== null ){
            setOrganization({
                name: userOwner?.companyOwner?.companyName,
                displayName: userOwner?.displayName,
                email: userOwner.email,
                dateOfBirth: userOwner.dateOfBirth
            })
        }else if( userOwner.storeOwner !== null){
            setOrganization({
                name: userOwner?.storeOwner?.storeName,
                displayName: userOwner?.displayName,
                email: userOwner.email,
                dateOfBirth: userOwner.dateOfBirth
            })
        }
    }, [ userOwner ])

    useEffect(()=>{
        if( userStore !== null ){
            console.log('i',)
            setOrganization({
                name: userStore?.belongingCompanyStore?.storeName,
                displayName: userStore?.informationUserCompanyStore?.displayName,
                email: userStore.informationUserCompanyStore?.email,
                dateOfBirth: userStore.informationUserCompanyStore?.dateOfBirth
            })
        }

     }, [ userStore ])

    return (
        <section className="self-center flex flex-col">
            <h2 className="border-b-2 font-bold p-1 m-1 text-xl md:text-3xl border-blue-950 text-blue-950">{
             organization?.displayName }</h2>
             {
                    organizationSession === "owner" && (
                        <p className="p-1 border-2 rounded-lg m-2 font-semibold text-center border-blue-500 border-dashed
                        bg-blue-500 text-white h-10 md:text-xl hover:scale-[1.02] md:w-72 "> Owner by { organization?.name } </p>
                    )
                }
                {
                    organizationSession === "store" && (
                        <p className="p-1 border-2 rounded-lg m-2 font-semibold text-center border-blue-500
                        text-blue-500 hover:scale-[1.02] md:w-72"> User by { organization?.name} </p>
                    )
                }
            <div className="flex flex-col gap-1 md:flex-row">
                
                <div className="flex flex-col gap-1 p-1 ml-2 border-2 border-theme rounded-md">
                    <h2 className="border-b-2 border-theme bg-theme text-center text-lg font-bold md:text-2xl text-white">Informacion personal</h2>
                    <p className="flex flex-row gap-1">
                        <span className="text-lg font-bold text-black/60">Email:</span>
                        <span className="text-xl font-bold text-black/60">{ organization?.email }</span> 
                    </p>
                    <p className="flex flex-row gap-1">
                        <span className="text-lg font-bold text-black/60">Cumpleaños:</span>
                        <span className="text-lg font-bold text-black/60">{ organization?.dateOfBirth }</span> 
                    </p>
                </div>

            <section className="flex flex-col gap-1">
                
                {
                    organizationSession === "owner" && (
                        <>
                            
                            <div className="border-2 p-1 rounded-md border-theme md:w-96">
                                <h2 className="text-center border-b-2 text-lg font-bold md:text-2xl text-white bg-theme">Biografia</h2>
                                <p className="p-1 font-bold text-black/70 text-lg">
                                { userOwner.biography }
                                </p>
                            </div>
                        </>
                    )
                    }
               
            </section>
            </div>
        </section>
    )
}