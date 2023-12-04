


export const ItemStore = ({ data })=>{
    
    return (
        <div className="flex flex-col gap-1 border-2 p-1 rounded-lg m-1 self-center hover:scale-[1.02]">
            <h2 className="border-b-2 text-xl font-bold border-black">{ data?.storeName }</h2>
            <section className="flex flex-col gap-1">
                <p className="flex gap-2">
                    <span>Direccion:</span>
                    <span>{ data?.address }</span>
                </p>
                <p className="flex gap-2">
                    <span>Departamento:</span>
                    <span>{ data?.region }</span>
                </p>
                <p className="flex gap-2">
                    <span>Codigo postal:</span>
                    <span>{ data?.postalCode }</span>
                </p>
            </section>
        </div>
    )
}