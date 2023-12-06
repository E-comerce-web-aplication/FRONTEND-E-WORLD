import { useEffect, useState } from "react"



export const AddOrderItem = ({ data, isPurcharseList, addPurcharseList, deletePurcharseList, onChangeQuantity = ()=>{} })=>{
    const [ quantity, setQuantity ] = useState(0)
    
    const onChange = ({ target })=>{
        setQuantity(target.value)
    }

    useEffect(()=>{
       onChangeQuantity( quantity, data?.id )
    }, [ quantity ])

    return (
        <div className=" border-2 flex gap-2 rounded-md p-1 hover:scale-[1.02] md:h-28">
            <img className="h-16" src={data?.images[0]}/>
            <div className="flex flex-col basis-[70%]">
                <h2 className="text-xl font-bold ">{ data?.productName }</h2>
                <p className="flex gap-1">
                    <span className="font-semibold">Precio:</span>
                    <span className="font-bold">{ data?.price }$</span>
                </p>
                <p className="flex text-sm gap-1  rounded-lg ">
                    <span className="font-semibold">Stock:</span>
                    <span className="font-bold">{ data?.stock }</span>
                </p>
            </div>
           {
            !isPurcharseList ? (
                <button 
                onClick={()=>addPurcharseList(data)}
                type="button"
                className="self-end flex bg-green-600 text-white font-bold gap-1 rounded-lg p-1">
                    Agregar
                </button>
            ):
            (
                <div className="flex gap-1">
                    <input 
                    name="Quantity"
                    onBlur={onChange}
                    className="focus:outline-theme/60 text-center font-bold w-[4.8rem] h-8 border-2 self-end text-sm rounded-lg"
                    type="number" placeholder="cantidad"/>
                    <button 
                    onClick={()=>deletePurcharseList(data)}
                    type="button"
                    className="self-end flex bg-red-600 text-white font-bold gap-1 rounded-lg p-1">
                        Eliminar
                    </button>
                </div>
            )
           }
        </div>
    )
}