import { BuildingOffice2Icon, BuildingStorefrontIcon } from "@heroicons/react/24/outline"


export const OptionForm = ()=>{
    return (
        <div className="flex flex-col gap-2 mb-2">
            <h2 className="border-2 p-1 text-2xl font-bold m-1 rounded-lg border-theme text-theme
            ">Escoge una opcion de interes</h2>
            <section className="self-center flex flex-col gap-1 border-2  p-1 border-blue-800 rounded-md w-72
            hover:scale-[1.02]">
                <p className="font-bold text-lg p-1 border-b-2 border-blue-800 text-blue-800
                text-center">Crear una tienda</p>
                <button
                type="button"
                >
                    <BuildingStorefrontIcon className="text-blue-800"/>
                </button>
            </section>

            <section className="self-center flex flex-col gap-1 border-2 border-cyan-800 p-1 rounded-md w-72
            hover:scale-[1.02]">
                <p className="font-bold text-lg p-1 border-b-2 border-cyan-800 text-cyan-800 
                text-center">Crear una compañia</p>
                <button
                type="button"
                >
                    <BuildingOffice2Icon className="text-cyan-800"/>
                </button>
            </section>
        </div>
    )
}