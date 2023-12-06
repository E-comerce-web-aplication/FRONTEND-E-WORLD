


export const ItemStore = ({ data })=>{
    
    return (
        <div className="flex flex-col gap-1 border-2 p-1 rounded-lg m-1 self-center hover:scale-[1.02] md:w-[25rem] md:h-36">
            <h2 className="border-b-2 text-2xl font-bold border-theme text-theme">{ data?.storeName }</h2>
            <section className="flex flex-col gap-1">
                <p className="flex gap-2">
                    <span className="font-bold text-black/60 text-sm">Direccion:</span>
                    <span className="font-bold text-black/70">{ data?.address }</span>
                </p>
                <p className="flex gap-2">
                    <span className="font-bold text-black/60 text-sm">Departamento:</span>
                    <span className="font-bold text-black/70">{ data?.region }</span>
                </p>
                <p className="flex gap-2">
                    <span className="font-bold text-black/60 text-sm">Codigo postal:</span>
                    <span className="font-bold text-black/70">{ data?.postalCode }</span>
                </p>
            </section>
        </div>
    )
}