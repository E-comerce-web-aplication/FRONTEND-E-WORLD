import { useEffect, useRef } from "react"
import { useForm } from "../../../Hooks/useForm"
import { NextButton } from "../../../Common/Components/NextButton"
import { finalizatedStoreForm } from "../../../Store/auth/thunks"
import { useDispatch } from "react-redux"


const initialState = {
    storeName: '',
    review: '',
    address: '',
    region: '',
    city: '',
    postalCode: 0,
}

const validationForm = {
    storeName: [(value)=>value?.trim().length > 0 ],
    review: [( value )=> value?.trim().length > 0],
    address: [( value )=> value?.trim().length > 0],
    region: [( value )=> value?.trim().length > 0],
    city: [( value )=> value?.trim().length > 0],
    postalCode: [( value )=> value?.length > 0]
}

export const StoreForm = ()=>{

    const buttonRef = useRef()
    const storeNameRef = useRef()
    const reviewRef = useRef()
    const addressRef = useRef()
    const regionRef = useRef()
    const cityRef = useRef()
    const postalCodeRef = useRef()

    const { storeName, review, address, region, city, postalCode, onInputChange, onNextInput,
           disableButton, setDisableButton, formState } = useForm( initialState, validationForm )

    useEffect(()=>{
        setDisableButton(false)
    },[])

    const dispatch = useDispatch()

    const onFinalizatedForm = ()=>{
        dispatch( finalizatedStoreForm(formState) )
    }

    return (
        <section className="flex flex-col">
            <h2 className="border-2 font-bold text-center text-2xl m-1 p-1 rounded-lg border-theme text-theme">Informacion de tienda</h2>
            <section className="flex flex-col gap-1">
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[10.2rem] z-10'>Nombre de la tienda</label>
                    <input
                        name='storeName'
                        value={storeName}
                        ref={storeNameRef}
                        onChange={onInputChange}
                        onKeyDown={(e)=>onNextInput(e, reviewRef)}
                        type="text"
                        placeholder='Company inc.' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-16 z-10'>Reseña</label>
                    <textarea
                    name='review'
                    value={review}
                    ref={reviewRef}
                    onChange={onInputChange}
                    onKeyDown={(e)=>onNextInput(e, addressRef)}
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg pt-3 h-20 pl-2 font-bold text-black/50'>
                    </textarea>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-20 z-10'>Direccion</label>
                    <input
                        name='address'
                        value={address}
                        ref={addressRef}
                        onChange={onInputChange}
                        onKeyDown={(e)=>onNextInput(e, regionRef)}
                        type="text"
                        placeholder='Direccion de ejemplo' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[12.7rem] z-10'>Departamento - Provincia</label>
                    <input
                        name='region'
                        value={region}
                        ref={regionRef}
                        onChange={onInputChange}
                        onKeyDown={(e)=>onNextInput(e, cityRef)}
                        type="text"
                        placeholder='La Libertad' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50'/>
                </div>
                <section className="flex gap-1 justify-center">
                    <div className='flex flex-col '>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[3.7rem] z-10'>Ciudad</label>
                        <input
                            name='city'
                            value={city}
                            ref={cityRef}
                            onChange={onInputChange}
                            onKeyDown={(e)=>onNextInput(e, postalCodeRef)}
                            type="text"
                            placeholder='Ciudad Arce' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[7.2rem] z-10'>Codigo Postal</label>
                        <input
                            name='postalCode'
                            value={postalCode}
                            ref={postalCodeRef}
                            onChange={onInputChange}
                            onKeyDown={(e)=>onNextInput(e, buttonRef)}
                            type="number"
                            placeholder='0560' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                </section>
            </section>
            <div className="flex flex-col mt-2 self-center w-80">
             <NextButton onFinalizatedForm={onFinalizatedForm}  disableButton={disableButton} nextRef={buttonRef} next={3} />
            </div>
        </section>
    )
}