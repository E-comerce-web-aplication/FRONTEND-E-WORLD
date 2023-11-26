import { CommonLayout } from "../../Layout"
import { FilterProducts } from "../Components/FilterProducts"


export const CreatePurcharsePage = ()=> {
    return (
        <CommonLayout>
            <main className="flex flex-col">
                <FilterProducts/>
            </main>
        </CommonLayout>
    )
}