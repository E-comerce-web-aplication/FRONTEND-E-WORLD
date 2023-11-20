import { CameraIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useForm } from "../../../Hooks/useForm"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const items = {
    image1: ''
}

const validationForm = {
    image1: [(value)=>value?.trim().length > 0]
}

export const Header = ()=>{
    const [ organization, setOrganization ] = useState({})

    const { userOwner , userStore } = useSelector( state => state.user )
    const { companyName, review } = useSelector( state => state.company )

    useEffect(()=>{
        if( userOwner?.companyOwner != null){
            return setOrganization({
                name: userOwner?.companyOwner?.companyName,
                review: userOwner?.companyOwner?.review
            })
        }else if( userOwner?.storeOwner != null ){
            return setOrganization({
                name: userOwner?.storeOwner?.storeName,
                review: userOwner?.storeOwner?.review
            })
        }

        if( userStore !== null ){
            return setOrganization({
                name: userStore?.belongingStore?.storeName,
                review: userStore?.belongingStore?.review
            })
        }
    }, [ userOwner, userStore ])


    const { image, onDeleteImage, onChangeImageUrl  } = useForm( items, validationForm )
    
    return (
        <section >
            <h2 className="border-2 border-dashed rounded-md p-1 m-1 text-center text-xl font-bold">
                { organization?.name } { userOwner?.storeOrCompany }
            </h2>
            <section className="flex gap-1">
                <figure className="flex pl-1 flex-row flex-wrap gap-2 overflow-y-auto"> 
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
                <section className="flex flex-col gap-1 max-w-[18rem]">
                    <h2 className="bg-theme p-1 rounded-md m-1 text-center text-white font-semibold">Reseña de { organization?.name }</h2>
                    <p className="pl-2 font-semibold text-black/80">{ organization?.review }</p>
                </section>
            </section>
        </section>
    )
}