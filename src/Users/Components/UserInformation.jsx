import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ownerInformation } from "../../Store/users/thunks"
import { useState } from "react"



export const UserInformation = ()=>{

    const dispatch = useDispatch()
    const { token, organization } = useSelector( state => state.auth )
    
    useEffect(()=>{
        dispatch( ownerInformation( token ) )
    }, [])

    const { userOwner } = useSelector( state => state.user )

    return (
        <section className="self-center flex flex-col">
            <h2 className="border-b-2 font-bold p-1 m-1 text-xl border-blue-950 text-blue-950">{ userOwner.displayName }</h2>
            <p className="p-1 border-2 rounded-lg m-2 font-semibold text-center border-blue-500 text-blue-500 hover:scale-[1.02]"> Owner by { userOwner.companyOwner.companyName } </p>
            <section className="flex flex-col gap-1">
                <div className="flex flex-col gap-1 p-1 ml-2 border-2 rounded-md">
                    <h2 className="border-b-2 text-center text-lg font-bold">Informacion personal</h2>
                    <p className="flex flex-row gap-1">
                        <span>Email:</span>
                        <span className="">{ userOwner.email }</span> 
                    </p>
                    <p className="flex flex-row gap-1">
                        <span>Cumpleaños:</span>
                        <span className="">{ userOwner.dateOfBirth }</span> 
                    </p>
                    <div className="border-2 p-1 rounded-md">
                        <h2 className="text-center border-b-2 text-lg font-bold">Biografia</h2>
                        <p className="p-1 font-medium">
                        { userOwner.biography }
                        </p>
                    </div>
                </div>
               
            </section>
        </section>
    )
}