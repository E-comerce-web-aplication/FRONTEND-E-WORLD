import { useNavigate } from "react-router-dom"
import { CommonLayout } from "../../Layout"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getPurcharses } from "../../Store/purcharse/thunks"
import { PurcharseItem } from "../Components/Purcharse/PurcharseItem"


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
            <main className="flex flex-col gap-1 h-[80vh]">
                <section className="flex flex-col gap-1 h-[70vh] overflow-y-auto">
                    {
                        Purcharses?.map((purchase)=>(
                            <PurcharseItem data={purchase} key={purchase.id}/>
                        ))
                    }
                </section>
                <button
                className="hover:scale-[1.02] hover:opacity-70 border-2 rounded-md bg-green-600 text-white border-green-600 font-bold text-xl w-56 self-center"
                onClick={onChangeAddPurcharse}
                >Agregar Compra</button>
            </main>
        </CommonLayout>
    )
}