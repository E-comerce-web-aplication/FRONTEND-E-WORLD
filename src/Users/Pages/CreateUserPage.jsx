import { CommonLayout } from "../../Layout"
import { UserForm } from "../Components/UserForm"

export const CreateUserPage = ()=>{
    return (
        <CommonLayout>
            <main className="flex gap-1 flex-col h-[90vh] justify-center">
                <UserForm/>
            </main>
        </CommonLayout>
    )
}