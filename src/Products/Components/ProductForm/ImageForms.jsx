import { CameraIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

import { NextButton } from './NextButton'
import { useForm } from '../../../Hooks/useForm'

const items = {
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    image5: ''
}

const validationForm = {
    image1: [(value)=>value?.trim().length > 0],
    image2: [(value)=>value?.trim().length > 0],
    image3: [(value)=>value?.trim().length > 0],
    image4: [(value)=>value?.trim().length > 0],
    image5: [(value)=>value?.trim().length > 0]
}

export const ImageForm = ()=>{

   const {setDisableButton, disableButton, onDeleteImage, onChangeImageUrl, image} = useForm( items, validationForm)

   useEffect(()=>{
    setDisableButton(false)
    },[])

    return (
        <div className="flex flex-col gap-1 mt-1 mb-1">
            <h2 className="self-center font-bold m-1 p-1 border-2 border-dashed border-theme 
            rounded-md text-theme">Agrega imagenes de tu producto</h2>
            <form className='self-center flex flex-col justify-center'>
                <figure className="flex h-[60vh] pl-1 flex-row flex-wrap gap-2 overflow-y-auto">
                    {
                        image.map((image)=>{
                            return (
                            <div key={image.id}>
                                <XMarkIcon
                                onClick={()=>onDeleteImage(image.id)}
                                className="h-5 text-white bg-black/30 cursor-pointer relative top-6 z-20 hover:text-red-700"/> 
                                <img 
                                src={image.imageUrl}  className="h-[9.5rem] w-[9.5rem] rounded-lg cursor-pointer hover:scale-[1.02]"/>
                            </div>
                            )
                        })
                    }
                    <div className="flex justify-center h-[9.5rem] border-2 border-dashed border-theme w-[9.5rem]">
                        <label htmlFor="imageProduct" className="w-full flex justify-center cursor-pointer hover:bg-black/10">
                            <CameraIcon className={`h-10 self-center ${ image.length > 4 ? "text-theme/50": "text-theme "}`}/>
                        </label>
                        <input 
                        onChange={onChangeImageUrl}
                        id="imageProduct" className="hidden" type="file" multiple/>
                    </div>
                </figure>
                <NextButton  
                next={2} 
                disableButton={disableButton} />
            </form>
        </div>
    )
}