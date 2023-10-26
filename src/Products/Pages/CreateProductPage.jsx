import { CommonLayout } from '../../Layout'
import { IndexForm } from '../Components/ProductForm/indexForm'



export const CreateProductPage = ()=>{
    return (
        <CommonLayout>
            <main className='flex flex-col'>
                <h2 className='font-bold bg-theme m-1 rounded-lg p-1 text-white 
                text-center text-xl' >Crear un producto</h2>
                <IndexForm/>
            </main>
        </CommonLayout>
    )
}