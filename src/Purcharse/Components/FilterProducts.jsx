import {} from "@heroicons/react/24/outline"
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddPurcharseItem } from "./AddPurcharseItem"
import { PurcharseButtons } from "./PurcharseButtons"
import { loadProducts } from "../../Store/purcharse/thunks"


export const FilterProducts = ()=>{

    
    const dispatch = useDispatch()

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

    const deletePurcharseProduct =( product = {} )=>{
        if( Object.keys(product).length > 0 ){
            const newProducts = []
            const existsProduct = purcharseProduct.filter( purcharse => purcharse.id  !== product.id )
            if( existsProduct.length > 0 ){
                existsProduct.map((product)=>{
                    newProducts.push(product)
                })
                setPurcharseProduct(newProducts)     
            }else {
                setPurcharseProduct([ ]) 
            }
           
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

    const onChangeQuantity = ( value, productId )=>{
        const updatedProduct = []
        const updateProduct = purcharseProduct.filter( purcharse => purcharse.id  === productId )
        const products = purcharseProduct.filter( purcharse => purcharse.id  !== productId )
        
        if( updateProduct.length > 0 ){
            updateProduct.map((product)=>{
                updatedProduct.push({
                    ...product,
                    quantity: parseInt(value)
                })
            })
            setPurcharseProduct([
                ...products,
                ...updatedProduct
            ])
        }else {
            setPurcharseProduct([ ]) 
        }
    }

    const onLoadProducts = (products)=>{
        dispatch( loadProducts(products) )
    }
    return (
        <section className="flex flex-col gap-1">
          <div className="flex flex-col md:flex-row gap-1">
          
          <section className="self-center flex flex-col gap-1 h-[32vh] md:h-[40vh] overflow-y-auto">
            <div className="flex gap-1 m-1 pl-10 self-center">
                <input 
                onChange={onFindProductByName}
                type="text" 
                placeholder="nombre del producto"
                className="w-80 md:w-96 border-2 md:h-12 focus:outline-theme/50 focus:scale-[1.02] font-semibold rounded-s-md pl-2 text-black/70"
                />
                <MagnifyingGlassCircleIcon className="relative h-10 md:h-12 right-10 bg-theme text-white rounded-e-md hover:scale-[1.02]"/>
            </div>
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
                        onChangeQuantity={onChangeQuantity}
                        deletePurcharseList={deletePurcharseProduct}
                        isPurcharseList={true} data={product} key={product?.id}/>
                    ))
                }
            </section>
          </section>

          </div>
          <PurcharseButtons onLoadProducts={onLoadProducts} products={purcharseProduct}/>
        </section>
    )
}