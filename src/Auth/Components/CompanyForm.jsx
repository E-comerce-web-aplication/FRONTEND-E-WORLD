import { NextButton } from "./NextButton"




export const CompanyForm = ()=>{
    return (
        <section className="flex flex-col">
            <h2 className="border-2 font-bold text-center text-2xl m-1 p-1 rounded-lg border-theme text-theme">Informacion de tu compañia</h2>
            <section className="flex flex-col gap-1">
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[11.65rem] z-10'>Nombre de la compañia </label>
                    <input
                        name='price'
                        type="text"
                        placeholder='Company inc.' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
                </div>
                
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-36 z-10'>Tipo de compañia</label>
                    <select className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 bg-white' id="">
                       <option >Productos varios</option>  
                       <option >Productos cosmeticos</option>   
                       <option >Productos electronicos</option>   
                       <option >Productos limpieza</option>    
                    </select>
                
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-16 z-10'>Reseña</label>
                    <textarea
                    name='description'
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg pt-3 h-20 pl-2 font-bold text-black/50'>
                    </textarea>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-20 z-10'>Direccion</label>
                    <input
                        name='price'
                        type="text"
                        placeholder='Direccion de ejemplo' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[12.7rem] z-10'>Departamento - Provincia</label>
                    <input
                        name='price'
                        type="text"
                        placeholder='La Libertad' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
                </div>
                <section className="flex gap-1 justify-center">
                    <div className='flex flex-col '>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[3.7rem] z-10'>Ciudad</label>
                        <input
                            name='firstName'
                            type="text"
                            placeholder='Ciudad Arce' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[7.2rem] z-10'>Codigo Postal</label>
                        <input
                            name='price'
                            type="number"
                            placeholder='0560' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                </section>
            </section>
            <div className="flex flex-col mt-2 self-center w-80">
             <NextButton/>
            </div>
        </section>
    )
}