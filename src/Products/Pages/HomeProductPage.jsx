import { CommonLayout } from '../../Layout'
import { ItemProduct, ProductList } from '../Components'
import { CreateProductButton } from '../Components/Buttons/CreateProductButton'
import { NextProducts } from '../Components/Home/NextProducts'


export const HomeProductPage = ()=>{
    const products = [1,2,3,4,5,6,7]
    return (
        <CommonLayout>
            <main className='flex flex-col gap-1  pl-1'>
            <h2 className='border-2 p-1 m-1 rounded-lg border-theme text-theme 
                    text-center font-bold text-xl'>Mis productos</h2>
            <NextProducts/>
                <section className='flex-col basis-1/2'>
                    <ProductList>
                        {
                            products.map((i)=>(<ItemProduct key={i}/>))
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