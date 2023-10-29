import { CommonLayout } from "../../Layout"
import { OrderList } from "../Components/OrderList"
import { OrderItem } from "../Components/OrderItem"
import { FilterOrder } from "../Components/FilterOrder"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

export const ListOrderPage = ()=>{
    const items = [1,2,3,4,5,6,7,8]
    return (
        <CommonLayout>
            <main className="flex flex-col gap-1 mt-2">
               <section className="flex flex-row gap-1 justify-center ml-9 mr-9">
                  <FilterOrder/>
                  <p className="border-2 rounded-md border-dashed p-1 border-theme text-theme font-semibold w-44">Estas son tus ordenes puedes filtrarlas buscarlas entre otras opciones</p>
               </section>
                <OrderList>
                    {
                        items.map(()=>(<OrderItem key={1}/>))
                    }
                </OrderList>
                <section className="flex gap-1 self-center m-1">
                    <div className="p-1 border-theme border-2 rounded-md text-theme cursor-pointer hover:scale-[1.02]">
                      <ChevronLeftIcon className="h-5"/>
                    </div>
                    <section className="flex gap-2 font-bold">
                        <p className="self-center">1</p>
                        <p>...</p>
                        <p className="self-center">10</p>
                        <p>...</p>
                        <p className="self-center">20</p>
                    </section>
                   <div className="p-1 border-theme border-2 rounded-md text-theme cursor-pointer hover:scale-[1.02]">
                      <ChevronRightIcon className="h-5"/>
                   </div>
               </section>
            </main>
        </CommonLayout>
    )
}