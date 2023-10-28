import { NextButton } from "./NextButton"



export const UserStoreForm = ()=>{
    return (
        <section className="flex flex-col">
            <h2 className="border-2 font-bold text-center text-2xl m-1 p-1 rounded-lg border-theme text-theme">Crea un usuario para tu tienda</h2>
            <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[9.4rem] z-10'>Nombre del usurio</label>
                    <input
                        name='price'
                        type="text"
                        placeholder='Juan Carlos Estrada sustre' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
            </div>
            <div className='flex flex-col self-center w-80'>
                <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-12 z-10'>Email</label>
                <input
                    name='price'
                    type="email"
                    placeholder='example.email@gmail.com' 
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
            </div>
            <div className='flex flex-col self-center w-80'>
                <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-20 z-10'>Password</label>
                <input
                    name='price'
                    type="password"
                    placeholder='**********' 
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
            </div>
            <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[7.86rem] z-10'>Role de usuario</label>
                    <select className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 bg-white' id="">
                       <option >Administrador</option>     
                    </select>
             </div>
            <section className="flex flex-col gap-1 m-1 mt-2 self-center w-80">
               <NextButton/>    
            </section>
        </section>
    )
}