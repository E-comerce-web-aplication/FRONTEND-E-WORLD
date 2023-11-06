import { CommonLayout } from "../../Layout"
import { ItemProduct, ListProduct, StoreOption } from "../Components"



export const InventoryStorePage = ()=>{

    const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]

    return (
        <CommonLayout>
            <StoreOption storeNumber={4}/>
            <ListProduct>
                {
                    items.map((i)=>(
                        <ItemProduct key={i}/>
                    ))
                }
            </ListProduct>
        </CommonLayout>
    )
}