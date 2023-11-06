



export const ItemProduct = ()=>{
    return (
        <li className="self-center flex flex-col gap-1 bg-green-500 m-1 p-1 rounded-lg hover:scale-[1.02] cursor-pointer">
            <h2 className="font-semibold border-2 rounded-lg bg-white text-green-900 border-green-200 text-xl text-center">Sombria negra</h2>
            <section className="flex flex-row gap-[5.5rem]">
                <p className="flex gap-1 font-bold">
                    <span className="text-green-950">Pedido el: </span>
                    <span className="text-green-800">27/03/2020</span>
                </p>
                <p  className="flex gap-1 font-bold rounded-lg bg-white p-1 text-sm text-green-900">
                    15 aun en stock 
                </p>
            </section>
        </li>
    )
}