import { XCircleIcon } from "@heroicons/react/24/solid"



export const DetailRegister = ({ closeDetail })=>{
    return (
        <section className="fixed bg-black/40 h-full w-full sm:w-[80%] lg:w-[89%] flex flex-col gap-1">
            <XCircleIcon 
            onClick={closeDetail}
            className="h-9 text-white relative top-1 self-end cursor-pointer hover:scale-[1.02] hover:text-red-400/90"/>
            <section className="bg-white p-1 m-1 rounded-lg flex flex-col gap-1" >
                <p className="self-end border-2 rounded-lg p-1 font-bold border-theme text-theme">12/05/2020</p>
                <section className="flex flex-col gap-1 mt-3 mb-3">
                    <h2 className="border-2 text-center font-bold text-xl border-theme text-theme rounded-lg">Informacion de Usuario</h2>
                    <li className="text-theme font-semibold ml-1">Kalet Adonay Chavez</li>
                    <li className="text-theme font-semibold ml-1">Administrador</li>
                </section>
                <section className="flex flex-col gap-1">
                    <h2 className="border-2 text-center font-bold text-xl border-theme text-theme rounded-lg">Informacion de el producto</h2>
                    <p className="text-theme font-semibold ml-1">Nombre: Blue label de Jony Walker</p>
                    <p className="text-theme font-semibold ml-1">Cambios: cambio de stock</p>
                </section>
                <section className="flex flex-col gap-2 mt-3 mb-3">
                    <h2 className="border-2 text-center font-bold text-xl border-theme text-theme rounded-lg">Informacion de Cambios</h2>
                    <div className="flex gap-2 self-center">
                        <p className="border-2 p-1 text-lg font-bold border-theme text-theme rounded-lg">Antes: 13 </p>
                        <p className="border-2 p-1 text-lg font-bold border-theme text-theme rounded-lg">Ahora: 25</p>
                    </div>
                </section>
            </section>
        </section>
    )
}