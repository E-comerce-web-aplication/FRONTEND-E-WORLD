import { Link } from "react-router-dom"
import { CommonLayout } from "../../Layout"
import { Header } from "../Components/InformationPage/Header"
import { Main } from "../Components/InformationPage/Main"



export const InformationCompanyPage = ()=> {
    return (
        <CommonLayout>
            <main className="flex flex-col gap-1">
                <Header/>
                <Main/>
                <Link to="/company/update" className="p-1 m-1 rounded-lg border-2 font-bold text-center">
                    Actualizar informacion
                </Link>
            </main>
        </CommonLayout>
    )
}