import { useEffect, useRef } from "react"
import { useForm } from "../../Hooks/useForm"
import { useDispatch, useSelector } from "react-redux"
import { createNewStore } from "../../Store/store/thunks"
import { CheckBadgeIcon } from "@heroicons/react/24/outline"
import { addStore } from "../../Store/store/storeSlice"
import { useNavigate } from "react-router-dom"


const initialState = {
    storeName: '',
    address: '',
    region: '',
    city: '',
    postalCode: 0,
}

const validationForm = {
    storeName: [(value)=>value?.trim().length > 4 ],
    address: [( value )=> value?.trim().length > 25],
    region: [( value )=> value?.trim().length > 4],
    city: [( value )=> value?.trim().length > 4],
    postalCode: [( value )=> value?.length > 0]
}

export const CreateStoreForm = ()=>{

    const { userOwner } = useSelector( state => state.user )
    const { created } = useSelector( state => state.store )
    const navigate = useNavigate()

    const buttonRef = useRef()
    const storeNameRef = useRef()
    const addressRef = useRef()
    const regionRef = useRef()
    const cityRef = useRef()
    const postalCodeRef = useRef()

    const { storeName, address, region, city, postalCode, onInputChange, onNextInput,
           disableButton, setDisableButton, formState } = useForm( initialState, validationForm )

    useEffect(()=>{
        setDisableButton(false)
    },[])

    const dispatch = useDispatch()

    const onCreateStore =()=>{
        dispatch( createNewStore({
            storeName: storeName,
            address: address,
            region: region,
            city: city,
            postalCode: postalCode
        }, userOwner?.companyOwner?.id ) )

        setTimeout(() => {
            dispatch( addStore({
                created: false,
                error: null
            }) )
            navigate({
                pathname:'/stores/'
            })
        },1000);
    }
  
    return (
        <section className="flex flex-col justify-center">
            <h2 className="self-center border-2 font-bold text-center text-2xl m-1 p-1 md:w-96  md:ml-14 rounded-lg border-theme text-theme md:text-3xl ">Informacion de tienda</h2>
            <section className="flex flex-col gap-1">
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[10.2rem] z-10 md:w-[13.5rem] md:text-xl'>Nombre de la tienda</label>
                    <input
                        name='storeName'
                        value={storeName}
                        ref={storeNameRef}
                        onChange={onInputChange}
                        onKeyDown={(e)=>onNextInput(e, addressRef)}
                        type="text"
                        placeholder='Company inc.' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 md:h-14 md:w-96'/>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-20 z-10 md:w-[6.5rem]  md:text-xl'>Direccion</label>
                    <input
                        name='address'
                        value={address}
                        ref={addressRef}
                        onChange={onInputChange}
                        onKeyDown={(e)=>onNextInput(e, regionRef)}
                        type="text"
                        placeholder='Direccion de ejemplo' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 md:w-96 md:h-14'/>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[12.7rem] z-10 md:text-xl md:w-[16.8rem]'>Departamento - Provincia</label>
                    <input
                        name='region'
                        value={region}
                        ref={regionRef}
                        onChange={onInputChange}
                        onKeyDown={(e)=>onNextInput(e, cityRef)}
                        type="text"
                        placeholder='La Libertad' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 md:h-14 md:w-96'/>
                </div>
                <section className="flex gap-1 justify-center ml-16">
                    <div className='flex flex-col'>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[3.7rem] z-10 md:text-lg md:w-[4.3rem] '>Ciudad</label>
                        <input
                            name='city'
                            value={city}
                            ref={cityRef}
                            onChange={onInputChange}
                            onKeyDown={(e)=>onNextInput(e, postalCodeRef)}
                            type="text"
                            placeholder='Ciudad Arce' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 w-[9.6rem] md:w-48 md:h-14 '/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[7.2rem] z-10 md:text-lg md:w-[8.3rem]'>Codigo Postal</label>
                        <input
                            name='postalCode'
                            value={postalCode}
                            ref={postalCodeRef}
                            onChange={onInputChange}
                            onKeyDown={(e)=>onNextInput(e, buttonRef)}
                            type="number"
                            placeholder='0560' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12 pl-2 font-bold text-black/50 w-[9.6rem] md:w-48 md:h-14'/>
                    </div>
                </section>
            </section>
            <button 
            onClick={onCreateStore}
            disabled={!disableButton}
            className={`m-1 w-80 md:w-96 md:ml-16 text-white self-center h-16 rounded-lg font-bold text-xl
            ${
                disableButton === true
                ? "bg-theme "
                : "bg-black/30"
            } 
            hover:scale-[1.02]`}>
              Agregar tienda
            </button>
            { created !== false && (
                <div className="absolute bg-white top-36 md:top-24 z-30 border-2 rounded-lg self-center">
                    <CheckBadgeIcon className="text-green-600"/>
                    <p className="m-1 text-green-600 font-bold md:text-xl">Tu Usuario ha sido creado perfectamente</p>
                </div>
            )}
        </section>
    )
}