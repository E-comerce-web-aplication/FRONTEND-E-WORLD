import { useNavigate } from "react-router-dom"



export const ButtonOptions = ({ onLoadProducts, products })=>{

    const navigate = useNavigate()

    const onChangeConfirmationPage = ()=>{
        navigate({
            pathname:"/purcharse/create/confirmation"
        })
    }
    const onCanceledPurchase = ()=>{
        navigate({
            pathname:"/purcharse"
        })
    }

    return (
        <secion className="flex gap-1 m-1 justify-center">
            <button 
            onClick={()=>{
                onLoadProducts(products)
                onChangeConfirmationPage()
            }}
            className="hover:scale-[1.02] hover:opacity-80 flex border-2 text-lg font-bold p-1 rounded-lg border-green-600 bg-green-600 text-white"
            type="button"
            >Hacer el pedido</button>
            <button 
            onClick={onCanceledPurchase}
            className="hover:scale-[1.02] hover:opacity-80 flex border-2 text-lg font-bold p-1 rounded-lg border-red-600 bg-red-600 text-white"
            type="button"
            >Cancelar el pedido</button>
        </secion>
    )
}