



export const ItemRegister = ({ onOpen })=>{
    return (
        <li 
        onClick={onOpen}
        className="flex gap-1 self-center border-2 p-1 rounded-lg hover:scale-[1.02] cursor-pointer">
            <div className="w-32 bg-orange-400"></div>
            <section className="flex flex-col gap-1 p-1">
                <p className="self-end border-2 p-1 rounded-xl text-sm font-bold bg-theme text-white">12/10/2023</p>
                <h2 className="self-center font-bold border-b-2 border-theme text-theme text-lg">Informacion de usuario</h2>
                <li className="font-bold text-theme list-disc ml-5">Kalet Adonay Chavez</li>
                <li className="font-bold text-theme list-disc ml-5">Administrador</li>
                <h2 className="self-center font-bold border-b-2 border-theme text-theme text-lg">Informacion de producto</h2>
                <li className="font-bold list-disc ml-5 text-theme">Nombre: Sombrilla negra</li>
                <li className="font-bold list-disc ml-5 text-theme">Cambios: cambio de stock</li>
            </section>
        </li>
    )
}