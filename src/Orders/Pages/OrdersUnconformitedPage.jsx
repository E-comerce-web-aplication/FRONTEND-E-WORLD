import { useNavigate, useParams } from "react-router-dom"
import { CommonLayout } from "../../Layout"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { confirmatedOrder, getAllOrders } from "../../Store/order/thunks"
import { OrderList } from "../Components/OrderList"
import { OrderItem } from "../Components/OrderItem"



export const OrdersUnconformitedPage = ()=>{

    const [ openConfirmation, setConfirmation ] = useState(false)


    const { id } = useParams()
    const { orders } = useSelector( state => state.order )
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(()=>{
        dispatch( getAllOrders(id) )
    }, [id])

    const onConfirmeted = ( id )=>{
        dispatch( confirmatedOrder( id ) )
    }

    const onClose = ()=>{
        setConfirmation(false)
        navigate({
            pathname: '/orders'
        })
    }
    const onOpen = ()=>{
        setConfirmation(true)
    }
   
    return (
        <CommonLayout>
            <main className="w-[100%] flex flex-col gap-1 justify-center">
                <h2 className="text-3xl border-2 p-1 border-dashed rounded-lg border-theme text-theme font-bold self-center m-1" >Ordenes de la tienda</h2>
                <OrderList>
                    {
                        orders.length > 0 
                        ? (
                            <>
                            {
                                orders?.map(( order )=>(
                                <OrderItem onOpen={onOpen} onConfirmeted={onConfirmeted} data={order} key={order.id}/>
                                ))
                            }
                            </>
                        ) :
                        (
                            <p className=" text-yellow-600 text-4xl font-bold">Esta tienda no ha hecho pedidos</p>
                        )
                    }
                </OrderList>
                {
                    openConfirmation === true && (
                        <div className="absolute top-32 bg-white h-54 w-80 rounded-md border-2 border-black/30 right-[21rem] flex flex-col">
                            <p className="basis-[75%] text-xl text-center font-bold self-center pt-14">Desear autorizar este pedido?</p>
                            <button onClick={onClose} className="bg-green-600 h-10 rounded-md text-xl font-bold text-white m-1 hover:scale-[1.02]">Confirmar</button>
                        </div>
                    )
                }
            </main>
        </CommonLayout>
    )
}