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

        if( userStore != null ){
            setOrganization({
                name: userStore?.belongingStore?.storeName,
                displayName: userStore?.informationUserStore?.displayName,
                email: userStore.informationUserStore?.email,
                dateOfBirth: userStore.informationUserStore?.dateOfBirth
            })
        }

     }, [ userStore ])

    return (
        <section className="self-center flex flex-col">
            <h2 className="border-b-2 font-bold p-1 m-1 text-xl border-blue-950 text-blue-950">{
             organization?.displayName }</h2>
            {
                organizationSession === "owner" && (
                    <p className="p-1 border-2 rounded-lg m-2 font-semibold text-center border-blue-500
                    text-blue-500 hover:scale-[1.02]"> Owner by { organization?.name } </p>
                )
            }
            {
                organizationSession === "store" && (
                    <p className="p-1 border-2 rounded-lg m-2 font-semibold text-center border-blue-500
                    text-blue-500 hover:scale-[1.02]"> Owner by { organization?.name} </p>
                )
            }
            <section className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 p-1 ml-2 border-2 rounded-md">
                    <h2 className="border-b-2 text-center text-lg font-bold">Informacion personal</h2>
                    <p className="flex flex-row gap-1">
                        <span>Email:</span>
                        <span className="">{ organization?.email }</span> 
                    </p>
                    
                    {
                        organizationSession === "owner" && (
                            <>
                                <p className="flex flex-row gap-1">
                                    <span>Cumpleaños:</span>
                                    <span className="">{ organization?.dateOfBirth }</span> 
                                </p>
                                <div className="border-2 p-1 rounded-md">
                                    <h2 className="text-center border-b-2 text-lg font-bold">Biografia</h2>
                                    <p className="p-1 font-medium">
                                    { userOwner.biography }
                                    </p>
                                </div>
                            </>
                        )
                    }
                </div>
               
            </section>
        </section>
    )
}