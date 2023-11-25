import { CommonLayout } from "../../Layout"
import { DetailSection } from "../Components/DetailProductComponents/DetailSection"
import { ImageProduct } from "../Components/DetailProductComponents/ImageProduct"
import { findOneProduct } from "../../helpers/findOneProduct"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"



export const DetailProductPage = ()=>{

    const [ product, setProduct ] = useState({})
    const { productList } = useSelector( state => state.product )
    const params = useParams()
    
    useEffect(()=>{
        const product = findOneProduct( productList, params.id )
        setProduct(product[0])
    },[])


    return (
        <CommonLayout>
            <main className="flex flex-col gap-1">
                <h2 className="self-center border-2 border-theme text-theme p-1 rounded-lg m-1 
                font-bold">{ product?.title }</h2>
                <ImageProduct images={product} />
                <DetailSection/>
            </main>
        </CommonLayout>
    )
}