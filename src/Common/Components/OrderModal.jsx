



export const OrderModal = ()=>{
    const image = [1,2,3,4,5,6,7,8]
    return (
        <div className="flex flex-col">
            <h2 className="border-b-2 p-1 text-center text-theme border-theme font-bold">Orders</h2>
            <section className="flex flex-col h-[27rem] gap-1">
                <section className="flex flex-col gap-1 overflow-y-auto mt-1">
                    {
                        image.map(()=>(
                            <figure className="flex gap-1 border-2 border-theme rounded-lg m-1" >
                                <img className="h-[4.5rem] w-[4.3rem] border-r-2 border-theme" src="/public/assets/camisa_2.jpg"/>
                                <section className="self-center text-sm text-theme font-bold flex flex-col gap-1 ">
                                    <p>Quantity: 20</p>
                                    <p>Price: 23.45$</p>
                                </section>
                            </figure>
                            ))
                    }
                </section>
                <section className="flex flex-col gap-1">
                    <p className="border-2 p-1 font-bold text-sm rounded-lg border-theme text-theme">Date: 23/05/2023</p>
                    <p className="border-2 p-1 font-bold text-sm rounded-lg border-theme text-theme">Total: 260.60 $</p>
                    <button type="button" className="border-2 p-1 font-bold text-sm rounded-lg border-theme text-theme" >Comprar</button>
                </section>
            </section>
        </div>
    )
}