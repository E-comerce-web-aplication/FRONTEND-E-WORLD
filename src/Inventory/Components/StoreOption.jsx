import { BuildingStorefrontIcon } from "@heroicons/react/24/outline"
import { createArray } from "../../helpers/createArray"

export const StoreOption = ({ storeNumber })=>{
    const stores =  createArray(storeNumber)
    return (
        <div className="flex gap-1 justify-center">
            {
                stores.map((i)=>(
                <div className="flex flex-col cursor-pointer hover:scale-[1.02]">
                    <p className="font-bold text-orange-900 relative top-[1.9rem] left-8">{i}</p>
                    <BuildingStorefrontIcon 
                    key={i} 
                    className="h-[4.6rem] text-theme "/>

                </div>
                ))
            }
        </div>
    )
}