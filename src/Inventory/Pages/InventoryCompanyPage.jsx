import { CommonLayout } from "../../Layout"
import { ItemProduct, ListProduct } from "../Components"



export const InventoryCompanyPage = ()=>{
    const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

    return (
        <CommonLayout>
            <main className="flex flex-col gap-1">
                <h2 className="border-2 border-theme text-theme p-1 m-1 rounded-lg font-bold text-xl text-center">Inventario general</h2>
               <ListProduct>
                    {
                        items.map((i)=>(
                            <ItemProduct key={i}/>
                        ))
                    }
                </ListProduct>
            </main>
        </CommonLayout>
    )
}