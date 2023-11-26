


export const AddPurcharseItem = ({ data, isPurcharseList, addPurcharseList})=>{
    return (
        <div className="border-2 flex gap-2 rounded-md p-1 hover:scale-[1.02]">
            <img className="h-16" src={data.images[0]}/>
            <div className="flex flex-col">
                <h2 className="text-xl font-bold">{ data.productName }</h2>
                <p className="flex gap-1">
                    <span className="font-semibold">Precio:</span>
                    <span className="font-bold">{ data.price }$</span>
                </p>
                <p className="flex text-sm gap-1  rounded-lg ">
                    <span className="font-semibold">Stock:</span>
                    <span className="font-bold">{ data.stock }</span>
                </p>
            </div>
           {
            !isPurcharseList && (
                <button 
                onClick={()=>addPurcharseList(data)}
                type="button"
                className="self-end flex bg-green-600 text-white font-bold gap-1 rounded-lg p-1">
                    Agregar
                </button>
            )
           }
        </div>
    )
}