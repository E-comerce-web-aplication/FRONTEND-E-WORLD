
export const OrderItem = ({ data, onConfirmeted, onOpen  })=>{
    console.log(data)
    
    return(
        <section className="h-36 w-64 flex flex-col gap-1 p-1  border-2 rounded-md border-theme">

            <section className="self-center flex flex-col gap-1">
                <p className="self-end text-sm border-2 p-1 rounded-lg text-theme border-theme">{ data?.orderDate }</p>
                <p className="font-bold flex gap-2">
                    <span>ID del usuario:</span>
                    <span>{ data?.userId }</span>
                </p>
                {
                    data?.status === 2 
                    ? 
                    (
                        <p className="border-2 rounded-lg text-white bg-green-600 border-green-600 
                        font-bold text-xl text-center hover:scale-[1.02] cursor-pointer">Confirmada</p>
                    )
                    : 
                    (
                        <p 
                        onClick={()=>{
                            onConfirmeted(data?.id)
                            onOpen()
                        }}
                        className="border-2 rounded-lg text-white bg-red-600 border-red-600 
                        font-bold text-xl text-center hover:scale-[1.02] cursor-pointer">Sin confirmar</p>
                    )
                }
                
            </section>
        </section>
    )
}