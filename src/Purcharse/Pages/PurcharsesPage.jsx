import { useNavigate } from "react-router-dom"
import { CommonLayout } from "../../Layout"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPurcharses } from "../../Store/purcharse/thunks"
import { PurcharseItem } from "../Components/Purcharse/PurcharseItem"
import { PlusCircleIcon } from "@heroicons/react/24/solid"


export const PurcharsePage = ()=> {

    const { userOwner } = useSelector( state => state.user )
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChangeAddPurcharse = ()=>{
        navigate({
            pathname: '/purcharse/create'
        })
    }

    useEffect(()=>{
        dispatch( getPurcharses( userOwner.companyOwner.id ) )
    }, [])
    const { Purcharses } = useSelector( state => state.purchase )
   
    return (
        <CommonLayout>
            <main className="flex flex-col gap-1 h-[80vh] w-[100%]">
                <h2 className="md:text-3xl border-2 border-dashed rounded-lg self-center md:mt-2 p-1 border-theme text-theme">Compras realizadas en tu compañia</h2>
                <section className="flex flex-col gap-1  overflow-y-auto md:flex-row justify-center md:flex-wrap w-[120vh] self-center">
                    {
                        Purcharses?.map((purchase)=>(
                            <PurcharseItem data={purchase} key={purchase.id}/>
                        ))
                    }
                </section>
                <div className="fixed bottom-32 bg-green-600 border-2 border-green-600 flex gap-1 rounded-lg right-1 cursor-pointer p-1 hover:scale-[1.02] hover:opacity-80">
                    <button
                    className="hover:scale-[1.02]   text-white  font-bold text-xl  self-center"
                    onClick={onChangeAddPurcharse}
                    >Agregar Compra</button>
                    <PlusCircleIcon className="h-8 text-white hover:animate-spin cursor-pointer"/>
                </div>
            </main>
        </CommonLayout>
    )
}