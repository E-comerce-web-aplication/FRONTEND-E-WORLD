
import { useRef } from 'react'
import { useForm } from '../../../Hooks/useForm'
import { NextButton } from './NextButton'


const items = {
    name: '',
    description:'',
    stock: '',
    price: '',
}

export const ProductInformation = ()=>{

    const nameRef = useRef()
    const descriptionRef = useRef()
    const stockRef = useRef()
    const priceRef = useRef()
    const nextRef = useRef() 


    
    const { name, description, stock, price, onNextInput} = useForm(items)

    return (
        <div className='flex flex-col gap-1'>
            <form className='flex flex-col'>
                <div className='flex flex-col self-center w-64'>
                    <label htmlFor='name' className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-44 z-10'>Nombre del producto</label>
                    <input 
                    id='name'
                    ref={nameRef}
                    name='name'
                    onKeyDown={(e)=>onNextInput( e, stockRef )}
                    type="text" 
                    placeholder='sombria ejemplo'
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
                </div>
                <div className='flex flex-col self-center w-64'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-12 z-10'>Stock</label>
                    <input
                    ref={stockRef}
                    name='stock'
                    onKeyDown={(e)=>onNextInput(e,priceRef )}
                    type="number" 
                    placeholder='23'
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
                </div>
                <div className='flex flex-col self-center w-64'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-14 z-10'>Precio</label>
                    <input
                    ref={priceRef}
                    name='price'
                    onKeyDown={(e)=>onNextInput(e,descriptionRef )}
                    type="text"
                    placeholder='23.45' 
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
                </div>
                <div className='flex flex-col self-center w-64'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-24 z-10'>Descripcion</label>
                    <textarea
                    ref={descriptionRef}
                    name='description'
                    onKeyDown={(e)=>onNextInput(e,nextRef)}
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg pt-3 h-20 pl-2 font-bold text-black/50'>
                    </textarea>
                </div>
            </form>
            <NextButton nextRef={nextRef}/>
        </div>
    )
}