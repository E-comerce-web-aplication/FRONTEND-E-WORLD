import {} from "@heroicons/react/24/outline"
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { AddPurcharseItem } from "./AddPurcharseItem"


export const FilterProducts = ()=>{
    const [ product, setProduct ] = useState([])
    const [ purcharseProduct, setPurcharseProduct ] = useState([])
    const { productList } = useSelector( state => state.product )

    useEffect(()=>{
        if( productList.length > 0 ){
            setProduct(productList)
        }
    }, [ productList ])

    const AddPurcharseProduct = (product)=>{
       const exitsePurcharse = purcharseProduct.filter( purcharse => purcharse.id === product.id )
    
       if( exitsePurcharse.length <= 0 ){
        setPurcharseProduct([
            ...purcharseProduct,
            product
        ])
       }
    }

    const onFindProductByName =({ target })=>{
        const products = product.filter(( product )=>{
            const serchedProduct = product.productName.toLowerCase()
            const inputValue = target.value.toLowerCase()
            return serchedProduct.includes(inputValue)
        }) 
        setProduct(products)

        if( target?.value?.length === 0 ) setProduct(productList)
    }

    
    return (
        <section className="flex flex-col gap-1">
          <div className="flex gap-1 m-1 pl-10 self-center">
            <input 
            onChange={onFindProductByName}
            type="text" 
            placeholder="nombre del producto"
            className="w-80 border-2 focus:outline-theme/50 focus:scale-[1.02] font-semibold rounded-s-md pl-2 text-black/70"
            />
            <MagnifyingGlassCircleIcon className="relative h-10 right-10 bg-theme text-white rounded-e-md hover:scale-[1.02]"/>
          </div>
          <section className="self-center flex flex-col gap-1 h-[32vh] overflow-y-auto">
            {
                product.map((product)=>(
                    <AddPurcharseItem 
                    addPurcharseList={AddPurcharseProduct}
                    isPurcharseList={false} data={product} key={product.id}/>
                ))
            }
          </section>

          <section className="flex flex-col gap-1">
            <h2 className="text-center text-2xl font-bold">Productos que compraras</h2>
            <section className="flex flex-col gap-1 h-[40vh] overflow-y-auto self-center">
                {
                    purcharseProduct.map((product)=>(
                        <AddPurcharseItem 
                        addPurcharseList={()=>{}}
                        isPurcharseList={true} data={product} key={product.id}/>
                    ))
                }
            </section>
          </section>
        </section>
    )
}