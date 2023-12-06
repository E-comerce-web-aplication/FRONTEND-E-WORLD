import { CommonLayout } from "../../Layout"
import { CreateRoleForm } from "../Components/CreateRoleForm"



export const CreateRolePage = ()=>{
    return (
        <CommonLayout>
            <main className="h-[80vh] flex flex-col justify-center gap-1 w-[100%]">
                <CreateRoleForm/>
            </main>
        </CommonLayout>
    )
}