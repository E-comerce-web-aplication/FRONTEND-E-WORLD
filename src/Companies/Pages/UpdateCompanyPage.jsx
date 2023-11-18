import { CommonLayout } from "../../Layout"
import { UpdateCompanyForm } from "../Components/InformationPage/UpdateForm"



export const UpdateCompanyPage = ()=>{
    return(
        <CommonLayout>
            <main className="flex justify-center ">
                <UpdateCompanyForm/>
            </main>
        </CommonLayout>
    )
}