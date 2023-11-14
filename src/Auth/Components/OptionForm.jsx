import { BuildingOffice2Icon, BuildingStorefrontIcon } from "@heroicons/react/24/outline"
import { useDispatch, useSelector } from "react-redux"
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
            <h2 className="self-center border-2 p-1 text-2xl font-bold m-1 rounded-lg text-center bg-black text-theme
            ">Escoge una opcion de interes</h2>

           <section
           onClick={onChangeCompanyRegisterPage}
           className="self-center flex flex-col gap-1 border-2 border-dashed border-theme p-1 rounded-md w-72
            hover:scale-[1.02]">
                <p className="font-bold text-lg p-1 border-b-2  text-theme bg-black rounded-md
                text-center">Crear una compañia</p>
                <button
                type="button"
                >
                    <BuildingOffice2Icon className="text-theme"/>
                </button>
            </section>

            <section 
            onClick={onChangeStoreRegisterPage}
            className="self-center flex flex-col gap-1 border-2  p-1 rounded-md w-72
            hover:scale-[1.02] border-dashed border-theme">
                <p className="font-bold text-lg p-1 border-b-2
                text-center bg-black text-theme rounded-md">Crear una tienda</p>
                <button
                type="button"
                >
                    <BuildingStorefrontIcon className="text-theme"/>
                </button>
            </section>
            <p className="self-center text-center border-2 p-1 m-1 font-bold border-dashed rounded-md max-w-[18rem] border-black mb-5">Una vez que hayas creado tu organizacion no podras crear otra con el mismo usuario</p>
        </div>
    )
}