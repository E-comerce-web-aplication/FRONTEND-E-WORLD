



export const FilterOrder = ()=>{
    return (
        <div className="flex flex-col gap-1 font-bold">
            <h2 className="self-center font-bold text-theme">Filtrar por semanas</h2>
            <select className="flex flex-col gap-1 self-center p-2 rounded-lg bg-white border-theme border-2 text-theme focus:outline-none hover:scale-[1.02]">
                <option className="p-1 border-2 rounded-lg text-sm font-bold ml-1">Ultimo mes</option>
                <option className="p-1 border-2 rounded-lg text-sm font-bold ml-1">Ultimos 15 dias</option>
                <option className="p-1 border-2 rounded-lg text-sm font-bold ml-1">Ultimo semana</option>
            </select>
            <section className="flex flex-col self-center">
                <label className="font-bold text-theme">Filtrar por fecha</label>
                <input className="focus:outline-none border-2 rounded-lg p-1 text-theme border-theme" type="date"/>
            </section>
        </div>
    )
}