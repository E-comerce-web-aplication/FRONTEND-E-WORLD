import { CommonLayout } from "../../Layout"
import { PlusIcon} from "@heroicons/react/24/solid"
import { useSelector } from "react-redux"
import { StoreOrder } from "../Components/StoreOrder"

export const ListOrderPage = ()=>{

    const { stores } = useSelector( state => state.store )
   
    return (
        <CommonLayout>
            <main className="flex flex-col gap-1 mt-2">
                <div className="flex flex-wrap">
                    {
                        stores?.map(( store )=>(
                            <StoreOrder data={store} key={store.id}/>
                        ))
                    }
                </div>
                <button className="fixed z-30 bg-theme bottom-36 right-3 rounded-[100%] p-1 hover:scale-[1.02]">
                    <PlusIcon className="h-11 text-white"/>
                </button>
            </main>
        </CommonLayout>
    )
}