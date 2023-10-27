import { PlusCircleIcon } from "@heroicons/react/24/solid"

export const OptionButtons = ()=>{
    return (
        <section className="flex flex-col gap-2">
            <h2 className="text-center font-bold text-black border-2 border-black p-1 rounded-md">Haz una revision de tus opciones</h2>

            <section className="flex flex-col gap-1">
                <button className="h-10 flex gap-1 border-2 rounded-lg bg-green-600 hover:scale-[1.02]">
                    <PlusCircleIcon className="h-7 self-center text-white"/>
                    <p className="font-bold text-white self-center text-lg">Crear producto</p> 
                </button>
                <button className="h-10 flex gap-1 border-2 rounded-lg bg-red-600 hover:scale-[1.02]">
                    <PlusCircleIcon className="h-7 self-center text-white"/>
                    <p className="font-bold text-white self-center text-lg">Agregar una tienda</p> 
                </button>
                <button className="h-10 flex gap-1 border-2 rounded-lg bg-blue-700 hover:scale-[1.02]">
                    <PlusCircleIcon className="h-7 self-center text-white"/>
                    <p className="font-bold text-white self-center text-lg">Ver inventario</p> 
                </button>
                <button className="h-10 flex gap-1 border-2 rounded-lg bg-cyan-600 hover:scale-[1.02]">
                    <PlusCircleIcon className="h-7 self-center text-white"/>
                    <p className="font-bold text-white self-center text-lg">Agregar usuario a una tienda</p> 
                </button>
                <button className="h-10 flex gap-1 border-2 rounded-lg bg-orange-600 hover:scale-[1.02]">
                    <PlusCircleIcon className="h-7 self-center text-white"/>
                    <p className="font-bold text-white self-center text-lg">Peticiones de catalogo</p> 
                </button>
            </section>
        </section>
    )
}