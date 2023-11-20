import { Link} from "react-router-dom"
import { PencilIcon } from "@heroicons/react/24/solid"
import { CommonLayout } from "../../Layout"
import { Header } from "../Components/InformationPage/Header"
import { Main } from "../Components/InformationPage/Main"
import { useDispatch, useSelector } from "react-redux"
import { updateCompany } from "../../Store/company/companySlice"
import { useEffect } from "react"



export const InformationCompanyPage = ()=> {
  

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch( updateCompany({
            updated: false,
            error: null
        }) )
    }, [])

    return (
        <CommonLayout>
            <main className="flex flex-col gap-1 h-[80vh] justify-center ">
                <Header/>
                <Main/>
                <Link to="/company/update" className="cursor-pointer flex gap-1 p-1 m-1 rounded-lg border-2 font-bold text-center
                bg-green-500 h-10 justify-center max-w-xs self-end mt-2 hover:scale-[1.02]">
                   <p className="text-white font-bold text-lg"> Actualizar informacion </p>
                   <PencilIcon className="w-6 text-white"/>
                </Link>
            </main>
        </CommonLayout>
    )
}