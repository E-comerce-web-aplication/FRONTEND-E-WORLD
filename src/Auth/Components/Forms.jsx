
import { CompanyForm } from "./CompanyForm"
import { EndForm } from "./EndForm"
import { OptionForm } from "./OptionForm"
import { StoreForm } from "./StoreForm"
import { UserForm } from "./UserForm"
import { UserStoreForm } from "./UserStoreForm"


export const forms = {
    step0: (
        <div className="flex justify-center flex-col">
            <OptionForm/>
        </div>  
    ),
    step1: (
        <div className=" flex justify-center flex-col">
            <h2 className="border-2 p-1 m-1 text-center text-2xl rounded-lg
            border-theme text-theme font-bold">Tu informacion</h2>
            <UserForm/>
        </div>
    ),
    step2:(
        <div className=" flex justify-center flex-col">
          <CompanyForm/>
        </div>
    ),
    step3:(
        <div className=" flex justify-center flex-col">
          <StoreForm/>
        </div>
       ),
    step4:(
        <div className=" flex justify-center flex-col">
          <UserStoreForm/>
        </div>
    ),
    step5:(
        <div className="h-[100vh] flex justify-center flex-col">
          <EndForm/>
        </div>
    )
}