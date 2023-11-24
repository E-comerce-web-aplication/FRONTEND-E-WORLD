import { useEffect } from "react"
import { useState } from "react"
import { v4 as uuid} from 'uuid'
import { createValidation } from './helpers/validatorItem'

export const useForm = (initialForm = {} , validationForm = {} )=>{

    const [ formState, setFormState ] = useState(initialForm)
    const [ image, setImage ] = useState([])
    const [ disableImage, setDisableImage ] = useState(false)
    const [ disableButton, setDisableButton ] = useState(false)

    useEffect(()=>{
        setFormState(initialForm)
    }, [ initialForm ])

    useEffect(()=>{
        createValidation(setDisableButton, validationForm, formState)
    }, [ formState ])

    useEffect(()=>{
        if( image.length === 5){
            setDisableImage(true)
        }
    }, [ image ])
    

    const onInputChange = (event)=>{
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    const onNextInput = (e, nextInput)=>{
        if( e.key === 'Enter' ){
            nextInput.current.focus()
        }
    } 
    
    
    const onChangeImageUrl = (event)=>{
        
        const images = {
            id: uuid(),
            imageUrl:window.URL.createObjectURL(event.target.files[0]),
            file: event.target.files[0]
        }
        const newImages = [
            ...image,
            images
        ]
        setImage(newImages)
    }

    const onDeleteImage = (id)=>{
        if( image.length < 5 ) {
            setDisableImage(false)
        }
        const newImages = image.filter((image)=> image.id !== id );
        setImage(newImages)
    }


    return {
        ...formState,
        formState,
        onNextInput,
        disableButton,
        onInputChange, 
        setDisableButton,
        onChangeImageUrl,
        onDeleteImage,
        image,
        disableImage
    }
}