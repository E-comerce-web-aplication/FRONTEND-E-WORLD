import { useEffect, useState } from "react"
import { useSelector } from "react-redux"




export const OrganizationInfo = ()=>{

    const [ organization, setOrganization ] = useState({})

    const { userOwner , userStore } = useSelector( state => state.user )

    useEffect(()=>{
        if( userOwner?.companyOwner != null){
            return setOrganization({
                name: userOwner?.companyOwner?.companyName,
                region:userOwner?.companyOwner?.region,
                city: userOwner?.companyOwner?.city,
                postalCode: userOwner?.companyOwner?.postalCode,
                address: userOwner?.companyOwner?.address,
                review: userOwner?.companyOwner?.review
            })
        }else if( userOwner?.storeOwner != null ){
            return setOrganization({
                name: userOwner?.storeOwner?.storeName,
                region:userOwner?.storeOwner?.region,
                city: userOwner?.storeOwner?.city,
                postalCode: userOwner?.storeOwner?.postalCode,
                address: userOwner?.storeOwner?.address,
                review: userOwner?.storeOwner?.review
            })
        }

        if( userStore !== null ){
            return setOrganization({
                name: userStore?.belongingCompanyStore?.storeName,
                region:userStore?.belongingCompanyStore?.region,
                city: userStore?.belongingCompanyStore?.city,
                postalCode: userStore?.belongingCompanyStore?.postalCode,
                address: userStore?.belongingCompanyStore?.address,
                review: userStore?.belongingCompanyStore?.review
            })
        }
    }, [ userOwner, userStore ])

    return (
        <section className="flex flex-col gap-1">
            <h2 className="font-bold text-center border-2 text-lg m-2 p-1 rounded-lg md:text-2xl border-dashed border-theme text-theme">{organization?.name} {userOwner?.storeOrCompany} Information</h2>
           
            <div className="flex flex-col gap-1 md:flex-row mb-2">
                <section className="flex gap-5 self-center  border-2 p-2 rounded-lg md:ml-2 md:w-[24rem]">
                    <p className="flex flex-col gap-1 font-medium md:text-lg">
                        <span>Region:</span>
                        <span>Ciudad:</span>
                        <span>Codigo postal:</span>
                        <span>Direccion:</span>
                    </p>
                    <p className="flex flex-col gap-1 font-semibold md:text-lg">
                        <span>{ organization?.region } </span>
                        <span>{ organization?.city } </span>
                        <span>{ organization?.postalCode } </span>
                        <span>{ organization?.address } </span>
                    </p>
                </section>
                <section className="border-2 m-2 p-1 rounded-lg md:w-[22rem]">
                    <h2 className="border-b-2 p-1 text-center font-bold text-lg md:text-xl">Reseña de {organization?.name} {userOwner?.storeOrCompany} </h2>
                    <p className="p-1 font-bold md:text-lg">{organization?.review}</p>
                </section>
            </div>
        </section>
    )
}