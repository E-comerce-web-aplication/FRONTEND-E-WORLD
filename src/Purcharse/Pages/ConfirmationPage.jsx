import { useDispatch, useSelector } from "react-redux"
import { CommonLayout } from "../../Layout"
import { createNewPurcharse } from "../../Store/purcharse/thunks"



export const ConfirmationPage = ()=>{
    const { Products, ProviderId } = useSelector( state => state.purchase )
    const { userOwner } = useSelector( state => state.user )
    
    const dispatch= useDispatch()
    let total = 0;
    Products.map((product)=>{
        const amount = product.Quantity * product.Price
        total = total + amount
    })

    const newProducts = []
    Products.map((product)=>{
        newProducts.push({
            ProductId: product.ProductId,
            Quantity: product.Quantity
        })
    })

    const onCreateNewPurcharse = ()=>{
        dispatch( createNewPurcharse({
            Products: newProducts,
            CompanyId: userOwner.companyOwner.id,
            UserId: userOwner.id,
            ProviderId: ProviderId,
            Total: parseInt(total)
        }))
    }
    return (
        <CommonLayout>
            <main className="flex flex-col gap-1 h-[70vh]">
            <section className="m-1 flex flex-col">
                <h2 className="text-center font-bold text-2xl">Informacion de tu compra</h2>
                <p className="font-bold flex gap-1 self-center">
                    <span>Total a comprar:</span>
                    <span className="text-lg">{parseInt(total)}$</span>
                </p>
            </section>
            <button
            type="button"
            className="self-center border-2 font-bold text-xl p-1 rounded-md border-green-600 bg-green-600 text-white hover:scale-[1.02] hover:opacity-70"
            onClick={onCreateNewPurcharse}
            >Confirmar compra</button>
            </main> 
        </CommonLayout>
    )
}