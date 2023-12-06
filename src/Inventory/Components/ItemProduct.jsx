



export const ItemProduct = ({ data, quantity })=>{
    console.log(data)
    return (
        <li className="self-center flex gap-1 border-2 w-[28rem] m-1 p-1 rounded-lg hover:scale-[1.02] cursor-pointer">
            <img className="h-20 rounded-md w-32" src={data[0]?.images[0]}/>
            <section className="flex flex-col gap-1">
                <h2 className="font-semibold border-2 rounded-lg bg-white text-green-900 border-green-200 text-xl text-center">{ data[0]?.productName }</h2>
                <section className="flex flex-row gap-[5.5rem]">
                    <p className="flex gap-1 font-bold">
                        <span className="text-green-950">Precio: </span>
                        <span className="text-green-800">{ data[0]?.price} $</span>
                    </p>
                    <p  className="mt-3 flex gap-1 font-bold rounded-lg bg-white p-1 text-sm text-green-900">
                        { quantity } aun en stock 
                    </p>
                </section>
            </section>
        </li>
    )
}