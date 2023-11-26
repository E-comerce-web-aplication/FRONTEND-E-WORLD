import { useEffect, useState } from "react"



export const ImageProduct = ({ data })=>{

    const [ url, setUrl ] = useState("")

    const changeImage = (url)=>{
        setUrl(url)
    }

    useEffect(() => {
        if (data && data.images && data.images.length > 0) {
            setUrl(data.images[0]);
        }
    }, [data]);
    
    return (
        <div className="flex flex-col gap-3">
            <figure className="border-2 rounded-lg m-1">
                <img className="self-center h-52 w-full rounded-lg" src={url}/>
            </figure>
            <figure className="flex flex-row gap-2 self-center">
                {
                    data?.images?.map((image,i)=>{
                        return (
                            <img 
                            onMouseMove={()=>changeImage(image)}
                            className="h-11 w-14 border-[1px] rounded-md cursor-pointer border-black/80 hover:scale-[1.02]" src={image} key={i}/>
                        )
                    })
                }
            </figure>
        </div>
    )
}