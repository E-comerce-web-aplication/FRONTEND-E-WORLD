import { BuildingOffice2Icon, BuildingStorefrontIcon } from "@heroicons/react/24/outline"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { StoreOrCompanyOptionForm } from "../../Store/auth/thunks"


export const OptionForm = ()=>{

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onChangeCompanyRegisterPage = ()=>{

        dispatch( StoreOrCompanyOptionForm({ organization: 'company' }) )
        navigate({
            pathname: '/auth/Register_Company'
        })
    } 

    const onChangeStoreRegisterPage = ()=>{
        dispatch( StoreOrCompanyOptionForm({ organization: 'store' }) )
        navigate({
            pathname: '/auth/Register_Store'
        })
    } 

    return (
        <div className="flex flex-col gap-2 mb-2">
            <h2 className="self-center p-1 text-2xl font-bold m-1 rounded-lg text-center border-2 border-sky-800 text-sky-800
            ">Escoge una opcion de interes</h2>
            <p className="self-center text-center border-2 p-1 m-1 font-bold border-dashed rounded-md max-w-[18rem] border-yellow-700 text-yellow-700 mb-5">Una vez que hayas creado tu organizacion no podras crear otra con el mismo usuario</p>
           <section
           onClick={onChangeCompanyRegisterPage}
           className=" cursor-pointer self-center flex flex-col gap-1 w-72 border-b-4 border-l-4 border-black/5 p-1 rounded-lg bg-black/5 hover:scale-[1.02]">
                <button
                type="button"
                >
                    <BuildingOffice2Icon className="text-sky-700"/>
                </button>
                <p className="text-lg text-center text-white p-2 border-2 rounded-md bg-sky-700 h-12">Crea tu propia compañia</p>
            </section>

            <section
           onClick={onChangeStoreRegisterPage}
           className=" cursor-pointer self-center flex flex-col gap-1 w-72 border-b-4 border-l-4 border-black/5 p-1 rounded-lg bg-black/5 hover:scale-[1.02]">
                <button
                type="button"
                >
                    <BuildingStorefrontIcon className="text-sky-700"/>
                </button>
                <p className="text-lg text-center text-white p-2 border-2 rounded-md bg-sky-700 h-12">Crea tu propia tienda</p>
            </section>
        </div>
    )
}