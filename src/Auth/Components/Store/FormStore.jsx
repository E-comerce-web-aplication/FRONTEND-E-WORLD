
import { CompanyForm } from "../Company/CompanyForm"
import { EndForm } from "../EndForm"
import { UserForm } from "../Company/UserForm"
import { UserStoreForm } from "./UserStoreForm"
import { FormLayout } from "../../../Layout/FormLayout"

export const forms = {
    step0: (
        <FormLayout step={3}>
            <div className=" flex flex-col">
                <h2 className="border-2 p-1 m-1 self-center w-80 text-center text-2xl rounded-lg
                border-theme text-theme font-bold">Tu informacion</h2>
                <UserForm/>
            </div>
        </FormLayout>
    ),
    step1:(
        <FormLayout step={3}>
            <div className=" flex justify-center flex-col">
              <CompanyForm/>
            </div>
        </FormLayout>
    ),
    step2:(
        <FormLayout step={3}>
            <div className=" flex justify-center flex-col">
              <UserStoreForm/>
            </div>
        </FormLayout>
    ),
    step3:(
        <div className="h-[100vh] flex justify-center flex-col">
          <EndForm/>
        </div>
    )
}