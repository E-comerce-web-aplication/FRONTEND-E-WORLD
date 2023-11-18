



export const Main = ()=>{
    return (
        <section className="flex flex-col gap-1">
            <h2 className="font-bold text-center border-2 text-lg m-2 p-1 rounded-lg">Fresh company information</h2>
            <section className="flex gap-5 self-center  border-2 p-2 rounded-lg">
                <p className="flex flex-col gap-1 font-medium">
                    <span>Region:</span>
                    <span>Ciudad:</span>
                    <span>Codigo postal:</span>
                    <span>Direccion:</span>
                </p>
                <p className="flex flex-col gap-1 font-semibold">
                    <span>Nevadas</span>
                    <span>Las Vegas</span>
                    <span> 05005</span>
                    <span>Las vegas Nevadas</span>
                </p>
            </section>
        </section>
    )
}