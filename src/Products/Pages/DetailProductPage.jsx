import { CommonLayout } from "../../Layout"
import { DetailSection } from "../Components/DetailProductComponents/DetailSection"
import { ImageProduct } from "../Components/DetailProductComponents/ImageProduct"




export const DetailProductPage = ()=>{
    return (
        <CommonLayout>
            <main className="flex flex-col gap-1">
                <h2 className="self-center border-2 border-theme text-theme p-1 rounded-lg m-1 
                font-bold">Hoddie negro talla XL, M, X, S con garantia a larga duracion</h2>
                <ImageProduct/>
                <DetailSection/>
            </main>
        </CommonLayout>
    )
}