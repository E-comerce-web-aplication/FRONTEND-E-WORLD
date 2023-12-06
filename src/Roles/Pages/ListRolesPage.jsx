import { useDispatch, useSelector } from "react-redux"
import { CommonLayout } from "../../Layout"
import { useEffect } from "react"
import { getAllRoles } from "../../Store/roles/thunks"
import { ItemRole } from "../Components/ItemRole"
import { StoreItem } from "../Components/StoreItem"



export const ListRolesPage = ()=>{

    const { stores } = useSelector( state => state.store )
   
    return (
        <CommonLayout>
            <main className="flex flex-col md:flex-row md:flex-wrap gap-1">
                {
                    stores?.map((store)=>(
                        <StoreItem data={store} key={store.id}/>
                    ))
                }
            </main>
        </CommonLayout>
    )
}