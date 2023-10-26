import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'


export const NextProducts = ()=>{
    return (
        <section className='self-center flex flex-row gap-1'>
            <div className='border-2 border-theme p-1 rounded-full bg-theme cursor-pointer hover:scale-[1.02]'>
              <ChevronLeftIcon className='h-5 text-white'/>
            </div>
            <div className='pb-1 flex gap-2 text-black/70'>
                <p className='pt-1 self-center font-bold'>1</p>
                <p className='font-bold text-xl'>...</p>
                <p className='pt-1 self-center font-bold'>10</p>
                <p className='font-bold text-xl'>...</p>
                <p className='pt-1 self-center font-bold'>23</p>
            </div>
            <div className='border-2 border-theme p-1 rounded-full bg-theme cursor-pointer hover:scale-[1.02]'>
              <ChevronRightIcon className='h-5 text-white'/>
            </div>    
        </section>
    )
}