import { CommonLayout } from "../../Layout"
import { FilteredProduct } from "../Components/FilteredProduct"



export const CreateOrderPage = ()=>{
    return (
        <CommonLayout>
            <main className="flex flex-col">
                <FilteredProduct/>
            </main>
        </CommonLayout>
    )
}