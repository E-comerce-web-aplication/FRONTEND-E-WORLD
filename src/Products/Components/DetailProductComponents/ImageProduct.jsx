import { useState } from "react"



export const ImageProduct = ()=>{

    const [ url, setUrl ] = useState("/public/assets/mi hoddie.jpg")

    const changeImage = (url)=>{
        setUrl(url)
    }
    
    const images = ["mi hoddie.jpg", "camisa_2.jpg", "mi hoddie.jpg", "sueter_2.1.jpg"]
    
    return (
        <div className="flex flex-col gap-3">
            <figure className="border-2 rounded-lg m-1">
                <img className="self-center h-52 w-full rounded-lg" src={url}/>
            </figure>
            <figure className="flex flex-row gap-2 self-center">
                {
                    images.map((image,i)=>{
                        const img = `/public/assets/${image}`
                        return (
                            <img 
                            onMouseMove={()=>changeImage(img)}
                            className="h-11 w-14 border-[1px] rounded-md cursor-pointer border-black/80 hover:scale-[1.02]" src={img} key={i}/>
                        )
                    })
                }
            </figure>
        </div>
    )
}