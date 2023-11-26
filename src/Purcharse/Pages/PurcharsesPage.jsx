import { useNavigate } from "react-router-dom"
import { CommonLayout } from "../../Layout"


export const PurcharsePage = ()=> {
    const navigate = useNavigate()

    const onChangeAddPurcharse = ()=>{
        navigate({
            pathname: '/purcharse/create'
        })
    }
    return (
        <CommonLayout>
            <button
            onClick={onChangeAddPurcharse}
            >Agregar Compra</button>
        </CommonLayout>
    )
}