import { useSelector } from "react-redux"




export const OrganizationInfo = ()=>{

    const { userOwner } = useSelector( state => state.user )

    return (
        <section className="flex flex-col gap-1">
            <h2 className="font-bold text-center border-2 text-lg m-2 p-1 rounded-lg">{userOwner?.companyOwner?.companyName} {userOwner?.storeOrCompany} Information</h2>
            <section className="flex gap-5 self-center max-w-xs border-2 p-2 rounded-lg">
                <p className="flex flex-col gap-1 font-medium">
                    <span>Region:</span>
                    <span>Ciudad:</span>
                    <span>Codigo postal:</span>
                    <span>Direccion:</span>
                </p>
                <p className="flex flex-col gap-1 font-semibold">
                    <span>{ userOwner?.companyOwner?.region } </span>
                    <span>{ userOwner?.companyOwner?.city } </span>
                    <span>{ userOwner?.companyOwner?.postalCode } </span>
                    <span>{ userOwner?.companyOwner?.address } </span>
                </p>
            </section>
            <section className="border-2 m-2 p-1 rounded-lg">
                <h2 className="border-b-2 p-1 text-center font-bold text-lg">Reseña de {userOwner?.companyOwner?.companyName} {userOwner?.storeOrCompany} </h2>
                <p className="font-medium p-1">{userOwner?.companyOwner?.review}</p>
            </section>
        </section>
    )
}