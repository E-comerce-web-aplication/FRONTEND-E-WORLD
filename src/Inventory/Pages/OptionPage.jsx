
import { BuildingOffice2Icon, BuildingStorefrontIcon } from "@heroicons/react/24/outline"
import { CommonLayout } from "../../Layout"
import { useNavigate } from "react-router-dom"



export const OptionPage = ()=>{

    const navigate = useNavigate()

    const onChangeStorePage = ()=>{
        navigate({
            pathname: "/inventory/store"
        })
    }

    const onChangeCompanyPage = ()=>{
        navigate({
            pathname: "/inventory/company"
        })
    }

    return (
        <CommonLayout>
            <main className="flex flex-col gap-1">
                <h2 className="text-center border-2 rounded-lg p-1 m-1 text-theme font-bold border-theme text-lg">Escoge que inventario deseas ver</h2>
                <section 
                onClick={onChangeStorePage}
                className="border-2 flex flex-col self-center w-[80%] mt-2 border-orange-900 rounded-lg hover:scale-[1.02] cursor-pointer">
                    <h2 className="text-center text-xl font-bold bg-orange-900 text-white">Tiendas</h2>
                    <BuildingStorefrontIcon className="text-orange-900"/>
                </section>
                <section 
                onClick={onChangeCompanyPage}
                className="border-2 flex flex-col self-center w-[80%] mt-2 border-red-900 rounded-lg hover:scale-[1.02] cursor-pointer mb-2">
                    <h2 className="text-center text-xl font-bold bg-red-900 text-white">Compañia</h2>
                    <BuildingOffice2Icon className="text-red-900"/>
                </section>
            </main>
        </CommonLayout>
    )
}