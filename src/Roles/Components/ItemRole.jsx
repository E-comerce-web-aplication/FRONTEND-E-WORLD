



export const ItemRole = ({ data })=>{
   
    return (
        <>
        {
            data.length === 0 
            ? 
            <div className="self-center text-4xl font-bold text-yellow-600 border-2 rounded-lg border-dashed border-yellow-600 p-1 mt-10">
                Esta tienda no tiene roles
            </div>
            :<div className="flex flex-col gap-1">
                <h2 className="self-center text-3xl font-bold border-2 rounded-lg text-theme border-theme p-1 m-1 border-dashed" >Roles de la tienda</h2>
              <div className="md:flex md:flex-wrap justify-center">
                {
                        data?.map(( role )=>(
                            <div className="border-2 p-1 m-1 self-center rounded-lg md:w-72 md:h-44">
                                <h2 className="border-b-2 border-black text-xl font-bold">{ role.roleName }</h2>
                                <section>
                                    <p className="text-black/80 font-semibold">{ role.description }</p>
                                    <p>
                                        <span className="font-bold text-black/80">Permisos:</span>
                                        <span>{ role.permissions }</span>
                                    </p>
                                </section>
                            </div>
                        ))
                    }
              </div>
            </div> 
        }
        </>
    )
}