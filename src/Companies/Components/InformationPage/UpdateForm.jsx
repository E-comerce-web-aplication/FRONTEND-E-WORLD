import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getInformationCompany, updateCompanyInformation } from "../../../Store/company/thunks"
import { createValidation } from '../../../Hooks/helpers/validatorItem'
import { useNavigate } from "react-router-dom"



export const UpdateCompanyForm = ()=>{

    const navigate = useNavigate()
    const [ data, setData ] = useState({})
    const [ disableButton, setDisableButton ] = useState(false)

    const dispatch = useDispatch()
    const { token } = useSelector( state => state.auth )
    const { updated } = useSelector( state => state.company)

    useEffect(()=>{ 
        dispatch( getInformationCompany(token) )
    }, [ ])

    useEffect(()=>{
        createValidation(setDisableButton, {
            companyName: [(value)=>value?.trim().length > 4 ],
            review: [(value)=>value?.trim().length > 25 ],
            address: [(value)=>value?.trim().length > 25 ],
            postalCode: [(value)=>value?.length > 0 ],
            city: [(value)=>value?.trim().length > 4 ],
            region: [(value)=>value?.trim().length > 4 ],
            category: [(value)=>value?.trim().length > 0 ]
        }, data)
    }, [ data ])

    const company = useSelector( state => state.company )

    const [categories,setCategories] = useState([])

    useEffect(()=>{
        const fetchCategories = async () => {
            const res = await fetch("http://localhost:3000/api/v1/organization/categories");
            const data = await res.json();
            setCategories(data);
        };
        fetchCategories();
    }, [ ])

    useEffect(()=>{
       setData({
        companyName: company.companyName,
        review: company.review,
        address: company.address,
        postalCode: 0,
        city: company.city,
        region: company.region,
        category: ''
       })

    }, [company])

    const onInputChange = (event)=>{
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const onUpdatedCompany = ()=>{
        dispatch( updateCompanyInformation( token,{
            ...data,
            postalCode: parseInt(data.postalCode)
        } ) )
    }
    useEffect(()=>{
        if(updated === true){
            navigate({
                pathname: "/company/information"
            })
        }
    }, [updated])
    
    return (
        <form className="flex flex-col gap-1 justify-center">
           <section className="flex flex-col gap-1">
                <div className='flex flex-col self-center w-80'>
                    <label
                    className="font-bold text-black/80 bg-white p-1 ml-2 relative top-4 z-10 w-[11.65rem]">
                        Nombre de la compañia
                    </label>
                    <input
                        name='companyName'
                        onChange={onInputChange}
                        value={data.companyName}
                        type="text"
                        placeholder='Company inc.' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-black/80 rounded-lg 
                        h-12 pl-2 font-bold text-black/50'/>
                </div>
                <div className='flex flex-col self-center w-80'>
                            <label className='font-bold text-black/80 bg-white p-1 ml-2 relative top-4 w-36 z-10'>
                                Tipo de compañia
                            </label>
                            <select 
                            name='category'
                            onChange={onInputChange}
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-black/80 rounded-lg h-12
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
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-black/80 bg-white p-1 ml-2 relative top-4 w-16 z-10'>
                        Reseña
                    </label>
                    <textarea
                    name='review'
                    value={data.review}
                    onChange={onInputChange}
                    className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-black/80 rounded-lg 
                    pt-3 h-20 pl-2 font-bold text-black/50'>
                    </textarea>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-black/80 bg-white p-1 ml-2 relative top-4 w-20 z-10'>
                        Direccion
                    </label>
                    <input
                        name='address'
                        value={data.address}
                        onChange={onInputChange}
                        type="text"
                        placeholder='Direccion de ejemplo' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-black/80 rounded-lg
                        h-12 pl-2 font-bold text-black/50'/>
                </div>
                <div className='flex flex-col self-center w-80'>
                    <label className='font-bold text-black/80 bg-white p-1 ml-2 relative top-4 w-[12.7rem] z-10'>
                        Departamento - Provincia
                    </label>
                    <input
                        name='region'
                        value={data.region}
                        onChange={onInputChange}
                        type="text"
                        placeholder='La Libertad' 
                        className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-black/80 rounded-lg h-12
                        pl-2 font-bold text-black/50'/>
                </div>
                <section className="flex gap-1 justify-center">
                    <div className='flex flex-col '>
                        <label className='font-bold text-black/80 bg-white p-1 ml-2 relative top-4 w-[3.7rem] z-10'>
                            Ciudad
                        </label>
                        <input
                            name='city'
                            value={data.city}
                            onChange={onInputChange}
                            type="text"
                            placeholder='Ciudad Arce' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-black/80 rounded-lg h-12
                            pl-2 font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                    <div className='flex flex-col'>
                        <label className='font-bold text-black/80 bg-white p-1 ml-2 relative top-4 w-[7.2rem] z-10'>
                            Codigo Postal</label>
                        <input
                            name='postalCode'
                            value={data.postalCode}
                            onChange={onInputChange}
                            type="number"
                            placeholder='0560' 
                            className='focus:outline-orange-300 focus:scale-[1.02] border-2 border-black/80 rounded-lg h-12
                            pl-2 font-bold text-black/50 w-[9.6rem]'/>
                    </div>
                </section>
            </section>
            <button 
            onClick={onUpdatedCompany}
            type="button"
            disabled={!disableButton}
            className={`m-1 p-1 font-bold border-b-2 border-black/20 rounded-lg h-12  text-white text-lg
            hover:scale-[1.02]  ${disableButton === true ? "bg-orange-400 cursor-pointer" : "bg-black/50"}`}>
                 Actualizar 
            </button>
        </form>
    )
}