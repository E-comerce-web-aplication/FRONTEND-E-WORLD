import { useNavigate } from "react-router-dom"



export const StoreItem =({ data })=>{

    const navigate = useNavigate()

    const onChangeDetailRolePage = ( id )=>{
        navigate({
            pathname: `/roles/detail/${ id }`
        })
    }
    return (
        <div className="flex flex-col gap-1 border-2 p-1 rounded-lg m-1 self-center hover:scale-[1.02] w-80 h-54">
            <h2 className="border-b-2 text-xl font-bold border-theme text-theme">{ data?.storeName }</h2>
            <section className="flex flex-col gap-1">
                <p className="flex gap-2">
                    <span className="font-semibold text-black/70">Direccion:</span>
                    <span className="font-semibold text-black/80">{ data?.address }</span>
                </p>
                <p className="flex gap-2">
                    <span className="font-semibold text-black/70">Departamento:</span>
                    <span className="font-semibold text-black/80">{ data?.region }</span>
                </p>
                <p className="flex gap-2">
                    <span className="font-semibold text-black/70">Codigo postal:</span>
                    <span className="font-semibold text-black/80">{ data?.postalCode }</span>
                </p>
            </section>
            <button
            onClick={()=>onChangeDetailRolePage(data.id)}
            className="border-2 p-1 self-end rounded-lg border-theme text-theme font-bold text-sm hover:scale-[1.02]">ver roles</button>
        </div>
    )
}