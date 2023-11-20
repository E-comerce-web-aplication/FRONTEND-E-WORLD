import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

export const OptionButtons = ()=>{
    return (
        <section className="flex flex-col gap-2">
            <h2 className="text-center font-bold text-black border-2 border-black p-1 rounded-md">Haz una revision de tus opciones</h2>

            <section className="flex flex-col gap-1">
                <Link to="/company/information" className="border-2 rounded-md p-1 font-semibold text-center ">
                   Compañia
                </Link>
                <button className="border-2 rounded-md p-1 font-semibold">
                    Tiendas
                </button>
                <button className="border-2 rounded-md p-1 font-semibold">
                    Clientes
                </button>
                <button className="border-2 rounded-md p-1 font-semibold">
                    Usuarios
                </button>
            </section>
        </section>
    )
}