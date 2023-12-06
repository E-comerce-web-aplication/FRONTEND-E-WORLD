import { useDispatch, useSelector } from 'react-redux'
import { CommonLayout } from '../../Layout'
import { ItemProduct, ProductList } from '../Components'
import { CreateProductButton } from '../Components/Buttons/CreateProductButton'
import { NextProducts } from '../Components/Home/NextProducts'
import { useEffect } from 'react'
import { getAllProducts } from '../../Store/products/thunks'


export const HomeProductPage = ()=>{
    const { userOwner } = useSelector( state => state.user )
    const { organizationSession, userStore } = useSelector( state => state.user)
    const dispatch = useDispatch()
   
    useEffect(()=>{
        if( organizationSession !== 'store' ){
            dispatch( getAllProducts( userOwner?.companyOwner?.id) )
        }
        dispatch( getAllProducts( userStore?.belongingCompanyStore?.company ) )
    }, [])
    const { productList } = useSelector( state => state.product)

    
  
    return (
        <CommonLayout>
            <main className='flex flex-col gap-1  pl-1 '>
            <h2 className='self-center md:w-96 border-2 p-1 m-1 rounded-lg border-theme text-theme 
                    text-center font-bold text-xl md:text-3xl'>Mis productos</h2>
            <NextProducts/>
                <section className='self-center flex-col basis-1/2 justify-center'>
                    <ProductList>
                        {
                            productList?.map(
                            (product)=>
                                (
                                <ItemProduct data={product}  key={product.id}/>
                                ))
                        }
                    </ProductList>
                </section>
                <section>
                    
                </section>
            </main>
            <CreateProductButton/>
        </CommonLayout>
    )
}