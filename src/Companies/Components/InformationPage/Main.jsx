import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"




export const Main = ()=>{
    const [ organization, setOrganization ] = useState({})

    const { userOwner , userStore } = useSelector( state => state.user )

    useEffect(()=>{
        if( userOwner?.companyOwner != null){
            return setOrganization({
                name: userOwner?.companyOwner?.companyName,
                region:userOwner?.companyOwner?.region,
                city: userOwner?.companyOwner?.city,
                postalCode: userOwner?.companyOwner?.postalCode,
                address: userOwner?.companyOwner?.address
            })
        }else if( userOwner?.storeOwner != null ){
            return setOrganization({
                name: userOwner?.storeOwner?.storeName,
                region:userOwner?.storeOwner?.region,
                city: userOwner?.storeOwner?.city,
                postalCode: userOwner?.storeOwner?.postalCode,
                address: userOwner?.storeOwner?.address
            })
        }

        if( userStore !== null ){
            return setOrganization({
                name: userStore?.belongingStore?.storeName,
                region:userStore?.belongingStore?.region,
                city: userStore?.belongingStore?.city,
                postalCode: userStore?.belongingStore?.postalCode,
                address: userStore?.belongingStore?.address
            })
        }
    }, [ userOwner, userStore ])
 
    return (
        <section className="flex flex-col gap-1">
            <h2 className="font-bold text-center border-2 text-lg m-2 p-1 rounded-lg">{ organization?.name  } { userOwner?.storeOrCompany } information</h2>
            <section className="flex gap-5 self-center  border-2 p-2 rounded-lg">
                <p className="flex flex-col gap-1 font-medium">
                    <span>Region:</span>
                    <span>Ciudad:</span>
                    <span>Codigo postal:</span>
                    <span>Direccion:</span>
                </p>
                <p className="flex flex-col gap-1 font-semibold">
                    <span>{ organization?.region } </span>
                    <span>{ organization?.city } </span>
                    <span>{ organization?.postalCode } </span>
                    <span>{ organization?.address } </span>
                </p>
            </section>
        </section>
    )
}