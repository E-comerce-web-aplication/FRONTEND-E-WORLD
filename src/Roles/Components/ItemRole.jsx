



export const ItemRole = ({ data })=>{
    console.log(data)
    return (
        <>
        {
            data.length === 0 
            ? 
            <div>
                Esta tienda no tiene roles
            </div>
            :<div className="flex flex-col gap-1">
                <h2 className="self-center text-2xl font-bold" >Roles de la tienda</h2>
                {
                    data?.map(( role )=>(
                        <div className="border-2 p-1 m-1 self-center rounded-lg">
                            <h2 className="border-b-2 border-black text-xl font-bold">{ role.roleName }</h2>
                            <section>
                                <p>{ role.description }</p>
                                <p>
                                    <span>Permisos:</span>
                                    <span>{ role.permissions }</span>
                                </p>
                            </section>
                        </div>
                    ))
                }
            </div> 
        }
        </>
    )
}