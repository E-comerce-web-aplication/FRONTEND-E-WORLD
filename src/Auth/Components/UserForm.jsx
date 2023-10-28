import { NextButton } from "./NextButton"




export const UserForm = ()=>{
    return (
        <>
        <form className=" flex flex-col max-w-md gap-2">
            <section className="flex flex-col gap-1">
                <section className="flex gap-1 justify-center">
                    <div className='flex flex-col '>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[7.7rem] z-10'>Primer nombre</label>
                        <input
                            name='firstName'
                            type="text"
                            placeholder='Juan' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[8.7rem] z-10'>Segundo nombre</label>
                        <input
                            name='price'
                            type="text"
                            placeholder='Carlos' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                </section>
                <section className="flex gap-1 justify-center">
                    <div className='flex flex-col '>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[7.9rem] z-10'>Primer apellido</label>
                        <input
                            name='firstName'
                            type="text"
                            placeholder='Hernandez' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[8.8rem] z-10'>Segundo apellido</label>
                        <input
                            name='price'
                            type="text"
                            placeholder='Hernandez' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                </section>
            </section>

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
                <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[10.3rem] z-10'>Fecha de nacimiento</label>
                <input
                    name='dateOfBirth'
                    type="date"
                    placeholder='23.45' 
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
            </div>
            <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-24 z-10'>Descripcion</label>
                    <textarea
                    name='description'
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg pt-3 h-20 pl-2 font-bold text-black/50'>
                    </textarea>
            </div>

        </form>
                
        <section className="flex flex-col gap-1 m-1 mt-2 self-center w-80">
            <NextButton/>    
            <button className="bg-blue-500 rounded-lg h-10 text-white"> Google</button>                    
        </section>
        </>
    )
}