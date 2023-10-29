



export const OrderItem = ()=>{
    return(
        <section className="self-center flex flex-row gap-1 p-1 border-2 rounded-md border-theme hover:scale-[1.02]">
            <figure className="border-r-2 border-theme">
                <img className="h-32 w-32" src="/public/assets/camisa_2.jpg"/>
            </figure>

            <section className="self-center flex flex-col gap-1 w-44">
                <p className="self-end mb-14 text-sm border-2 p-1 rounded-lg text-theme border-theme">22/03/2023</p>
                <button className="bg-theme border-2 p-1 font-bold text-white rounded-lg hover:scale-[1.02]">Ver detalles</button>
            </section>
        </section>
    )
}