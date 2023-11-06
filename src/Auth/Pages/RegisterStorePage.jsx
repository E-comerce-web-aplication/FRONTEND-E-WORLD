import { ProductProvider } from "../../Products/Context/ProductContext"
import { IndexForm } from "../Components/IndexForm"



export const RegisterStorePage = ()=>{

    const onInputChange = ({ target })=>{
       
    }

    

  
    return (
        <ProductProvider>
            <main className="flex flex-col justify-center">
              <IndexForm nextForm={0}/>
            </main>
        </ProductProvider>
    )
}