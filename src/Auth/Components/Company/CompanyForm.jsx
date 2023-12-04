import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NextButton } from "../../../Common/Components/NextButton"
import { finalizatedOrganizationForm } from "../../../Store/auth/thunks"
import { useForm } from "../../../Hooks/useForm"



const initialState = {
    companyName: '',
    review: '',
    address: '',
    postalCode: 0,
    city: '',
    region: '',
    category: 'Productos varios'
}

const formValidation = {
    companyName: [(value)=>value?.trim().length > 4 ],
    review: [(value)=>value?.trim().length > 25 ],
    address: [(value)=>value?.trim().length > 25 ],
    postalCode: [(value)=>value?.length > 0 ],
    city: [(value)=>value?.trim().length > 4 ],
    region: [(value)=>value?.trim().length > 4 ],
    category: [(value)=>value?.trim().length > 0 ]
}

export const CompanyForm = ()=>{

    const { organization } = useSelector( state => state.auth )

    const buttonRef = useRef()
    const companyNameRef = useRef()
    const reviewRef = useRef()
    const addressRef = useRef()
    const postalCodeRef = useRef()
    const cityRef = useRef()
    const regionRef = useRef()
    const categoryRef = useRef()

    const { companyName, review, address, postalCode, city, region,
         category, onInputChange, onNextInput, disableButton, setDisableButton, formState  } = useForm(initialState, formValidation)

    useEffect(()=>{
        setDisableButton(false)
    },[])

    const [categories,setCategories] = useState([])

    useEffect(()=>{
        const getCategories = async ()=>{
            const res = await fetch("http://3.135.216.50:8080/api/v1/organization/categories")
            const data = await res.json()
            setCategories(data)
        }
        getCategories()
    }, [])

    const dispatch = useDispatch()

    const onFinalizatedForm = ()=>{
        dispatch(finalizatedOrganizationForm(formState))
    }

    return (
        <section className="flex flex-col">
            <h2 className="border-2 font-bold text-center text-2xl m-1 p-1 rounded-lg border-theme text-theme">
                { `Informacion de tu  ${ organization === 'company' ? 'compañia' : 'tienda'  }` }
            </h2>
            <section className="flex flex-col gap-1">
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[11.65rem] z-10'>
                        { `Nombre de la  ${ organization === 'company' ? 'compañia' : 'tienda'  }` }
                    </label>
                    <input
                        name='companyName'
                        value={companyName}
                        onChange={onInputChange}
                        ref={companyNameRef}
                        onKeyDown={(e)=> onNextInput(e, categoryRef)}
                        type="text"
                        placeholder='Company inc.' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg 
                        h-12 pl-2 font-bold text-black/50'/>
                </div>
               
                {
                    organization === 'company' && (
                        <div className='flex flex-col self-center w-80'>
                            <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-36 z-10'>
                                Tipo de compañia
                            </label>
                            <select 
                            name='category'
                            onChange={onInputChange}
                            ref={categoryRef}
                            onKeyDown={(e)=>onNextInput(e, reviewRef)}
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12
                            pl-2 font-bold text-black/50 bg-white' >
                            {
                                categories.map((category)=>(
                                    <option
                                    value={category.id}
                                    key={category.id}>{category.categoryName}</option>
                                ))
                            }    
                            </select>
                        </div>
                    )
                }
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-16 z-10'>
                        Reseña
                    </label>
                    <textarea
                    name='review'
                    value={review}
                    ref={reviewRef}
                    onKeyDown={(e)=>onNextInput(e,addressRef)}
                    onChange={onInputChange}
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg 
                    pt-3 h-20 pl-2 font-bold text-black/50'>
                    </textarea>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-20 z-10'>
                        Direccion
                    </label>
                    <input
                        name='address'
                        value={address}
                        onChange={onInputChange}
                        ref={addressRef}
                        onKeyDown={(e)=>onNextInput(e,regionRef)}
                        type="text"
                        placeholder='Direccion de ejemplo' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg
                        h-12 pl-2 font-bold text-black/50'/>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[12.7rem] z-10'>
                        Departamento - Provincia
                    </label>
                    <input
                        name='region'
                        value={region}
                        onChange={onInputChange}
                        ref={regionRef}
                        onKeyDown={(e)=>onNextInput(e, cityRef)}
                        type="text"
                        placeholder='La Libertad' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12
                        pl-2 font-bold text-black/50'/>
                </div>
                <section className="flex gap-1 justify-center">
                    <div className='flex flex-col '>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[3.7rem] z-10'>
                            Ciudad
                        </label>
                        <input
                            name='city'
                            value={city}
                            onChange={onInputChange}
                            ref={cityRef}
                            onKeyDown={(e)=>onNextInput(e, postalCodeRef)}
                            type="text"
                            placeholder='Ciudad Arce' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12
                            pl-2 font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-bold text-theme bg-white p-1 ml-2 relative top-4 w-[7.2rem] z-10'>
                            Codigo Postal</label>
                        <input
                            name='postalCode'
                            value={postalCode}
                            onChange={onInputChange}
                            ref={postalCodeRef}
                            onKeyDown={(e)=> onNextInput(e, buttonRef)}
                            type="number"
                            placeholder='0560' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-theme rounded-lg h-12
                            pl-2 font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                </section>
            </section>
            <div className="flex flex-col mt-2 self-center w-80">
             <NextButton onFinalizatedForm={onFinalizatedForm} disableButton={disableButton} next={2} nextRef={buttonRef}/>
            </div>
        </section>
    )
}