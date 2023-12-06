import { useDispatch, useSelector } from "react-redux"
import { CommonLayout } from "../../Layout"
import { useEffect } from "react"
import { getAllStores } from "../../Store/store/thunks"
import { ListStore } from "../Components/ListStore"
import { ItemStore } from "../Components/ItemStore"
import { useNavigate } from "react-router-dom"


export const ListStorePage = ()=>{
    
    const { userOwner } = useSelector( state => state.user )
    const { organizationSession, userStore } = useSelector( state => state.user)
    const { stores } = useSelector( state => state.store )
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        if( organizationSession !== 'store' ){
            dispatch( getAllStores( userOwner?.companyOwner?.id) )
        }
        dispatch( getAllStores( userStore?.belongingCompanyStore?.company ) )
    }, [])

    const onChangeCreateStorePage = ()=>{
        navigate({
            pathname: '/stores/create_store'
        })
    }
    return (
        <CommonLayout>
            <main className="h-[80vh] flex flex-col gap-1 m-2">
                <h2 className="mb-2 font-semibold text-3xl text-center self-center border-2 p-1 rounded-lg border-dashed border-theme text-theme">Tiendas de la organizacion</h2>
                <ListStore>
                    {
                        stores?.map(( store )=>(
                            <ItemStore data={ store } key={ store.id }/>
                        ))
                    }
                </ListStore>
                <button
                onClick={onChangeCreateStorePage}
                className="h-10 border-2 rounded-lg m-2 bg-green-600 border-green-600 text-white text-xl  font-bold hover:scale-[1.02] self-center p-1">
                    Registrar una nueva tienda
                </button>
            </main>
        </CommonLayout>
    )
}