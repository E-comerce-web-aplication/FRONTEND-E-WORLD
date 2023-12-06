import { useEffect, useState } from "react"



export const ItemUserCOmpany = ({ data })=>{
    const [ information, setInformation ] = useState([])

   useEffect(()=>{
    setInformation(data.informationUserCompany)
   },[])

    return (
        <div className="self-center flex flex-col gap-1 border-2 border-theme/70 rounded-lg p-1 m-1 md:w-[30rem] md:h-32">
            <div className="flex gap-1">
                <p className="flex gap-1 text-2xl font-bold md:w-[20rem] md:pt-2 text-theme p-1 border-b-2 border-theme">
                { information?.displayName }
                </p>
                {
                    data.companyStore !== null && (
                        <p className="w-36  md:pl-2 font-bold border-2 rounded-lg p-1 text-sm text-white border-theme bg-theme ">Usuario de compañia</p>
                    )
                }
            </div>
            <p className="flex gap-1">
                <span className="font-bold md:text-lg text-theme/80">Email:</span>
                <span className="font-bold md:text-xl text-theme/90">{ information?.email }</span>
            </p>
            <p className="flex gap-1">
                <span className="font-bold md:text-lg text-theme/80">Role:</span>
                <span className="font-bold md:text-xl text-theme/90">Administrador</span>
            </p>
        </div>
    )
}