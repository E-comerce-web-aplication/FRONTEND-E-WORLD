import { CommonLayout } from "../../Layout"
import { CreateStoreForm } from "../Components/CreateStoreForm"


export const CreateStorePage = ()=>{
    return (
        <CommonLayout>
           <main className="h-[80vh] flex flex-col justify-center">
              <CreateStoreForm/>
           </main>
        </CommonLayout>
    )
}