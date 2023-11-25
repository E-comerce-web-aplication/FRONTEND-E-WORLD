
import { useRef } from 'react'
import { useForm } from '../../../Hooks/useForm'
import { NextButton } from '../../../Common/Components/NextButton'
import { useDispatch, useSelector } from 'react-redux'
import { loadInformation } from '../../../Store/products/thunks'


const items = {
    name:'',
    title: '',
    description:'',
    sendConditions: '',
    price: 0,
}

const validationForm = {
    name:[(value)=>value?.trim().length > 5 ],
    title: [(value)=> value?.trim().length > 50 ],
    description:[(value)=> value?.trim().length > 80],
    sendConditions: [(value)=> value?.length > 80],
    price: [(value)=> value > 0]
}

export const ProductInformation = ()=>{
    const { userOwner } = useSelector( state => state.company )
    const nameRef = useRef()
    const titleRef = useRef()
    const descriptionRef = useRef()
    const conditionsRef = useRef()
    const priceRef = useRef()
    const nextRef = useRef() 


    
    const { name, description, sendConditions, price, title, onNextInput, disableButton, onInputChange} = useForm(items, validationForm)
    
    const dispatch = useDispatch()

    const onFinalizatedForm = ()=>{
        dispatch( loadInformation({
            productName: name,
            title: title,
            description: description,
            sendConditions: sendConditions,
            price: price,
            companyId: userOwner?.companyOwner?.id
        }) )
    }

    return (
        <div className='flex flex-col gap-1'>
            <form className='flex flex-col'>
                <div className='flex flex-col self-center w-80'>
                    <label htmlFor='name' className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-44 z-10'>Nombre del producto</label>
                    <input 
                    id='name'
                    ref={nameRef}
                    name='name'
                    value={name}
                    onKeyDown={(e)=>onNextInput( e, titleRef )}
                    type="text"
                    onChange={onInputChange} 
                    placeholder='sombria ejemplo'
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label htmlFor='title' className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-40 z-10'>Titulo del producto</label>
                    <input 
                    id='title'
                    ref={titleRef}
                    name='title'
                    value={title}
                    onKeyDown={(e)=>onNextInput( e, priceRef )}
                    type="text"
                    onChange={onInputChange} 
                    placeholder='sombria ejemplo'
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-14 z-10'>Precio</label>
                    <input
                    ref={priceRef}
                    name='price'
                    onChange={onInputChange}
                    value={price}
                    onKeyDown={(e)=>onNextInput(e, conditionsRef )}
                    type="number"
                    min={0}
                    placeholder='23.45' 
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-44 z-10'>Condiciones de envio</label>
                    <textarea
                    ref={conditionsRef}
                    name='sendConditions'
                    onChange={onInputChange}
                    value={sendConditions}
                    onKeyDown={(e)=>onNextInput(e,descriptionRef)}
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg pt-3 h-20 pl-2 font-bold text-black/50'>
                    </textarea>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-24 z-10'>Descripcion</label>
                    <textarea
                    ref={descriptionRef}
                    name='description'
                    onChange={onInputChange}
                    value={description}
                    onKeyDown={(e)=>onNextInput(e,nextRef)}
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg pt-3 h-20 pl-2 font-bold text-black/50'>
                    </textarea>
                </div>
            </form>
            <NextButton onFinalizatedForm={onFinalizatedForm} disableButton={disableButton} next={1} nextRef={nextRef}/>
        </div>
    )
}