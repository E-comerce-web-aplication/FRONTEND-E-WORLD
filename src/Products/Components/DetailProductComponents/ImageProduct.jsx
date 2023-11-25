import { useEffect, useState } from "react"



export const ImageProduct = ({ images })=>{

    const [ url, setUrl ] = useState("")

    const changeImage = (url)=>{
        setUrl(url)
    }

    useEffect(()=>{
      images.images !== null && setUrl(images?.images[0]) 
    }, [ images.images ])
   
    return (
        <div className="flex flex-col gap-3">
            <figure className="border-2 rounded-lg m-1">
                <img className="self-center h-52 w-full rounded-lg" src={url}/>
            </figure>
            <figure className="flex flex-row gap-2 self-center">
                {
                    images?.images.map((image,i)=>{
                        const img = image
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