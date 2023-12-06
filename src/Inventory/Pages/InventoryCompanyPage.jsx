import { useDispatch, useSelector } from "react-redux"
import { CommonLayout } from "../../Layout"
import { ItemProduct, ListProduct } from "../Components"
import { useEffect } from "react"
import { getInventoryCompany } from "../../Store/inventory/thunks"



export const InventoryCompanyPage = ()=>{
    const dispatch = useDispatch()
    const { userOwner } = useSelector( state => state.user )
    
    useEffect(()=>{
        dispatch( getInventoryCompany(userOwner.companyOwner.id ) )
    },[ userOwner ])

    const { inventoryCompany } = useSelector( state => state.inventory )
   
    return (
        <CommonLayout>
            <main className="flex flex-col gap-1 w-[100%]">
                <h2 className="border-2 border-theme text-theme md:text-4xl self-center p-1 m-1 rounded-lg font-bold text-xl text-center">Inventario general</h2>
               <ListProduct>
                    {
                        inventoryCompany.map((inventory)=>(
                            <ItemProduct quantity={inventory.quantity} data={inventory.productInfo}  key={inventory.id}/>
                        ))
                    }
                </ListProduct>
            </main>
        </CommonLayout>
    )
}