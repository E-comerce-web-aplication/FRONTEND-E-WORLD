import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'



export const ItemProduct = ()=>{

    const navigate = useNavigate()

    const onChangeDetailProduct = (id)=>{
        navigate({
            pathname: `/products/${id}`
        })
    }

    return (
        <section 
        onClick={()=>onChangeDetailProduct(1)}
        className="flex flex-col gap-1 basis-1/2 border-2 p-1 rounded-lg cursor-pointer hover:scale-[1.02]">
            <figure className="rounded-l-lg bg-theme">
                <img className='h-48 w-full' src="/public/assets/mi hoddie.jpg"/>
            </figure>
            <div className="flex flex-col gap-1 ">
            <h2 className="border-2 border-theme rounded-lg text-center font-bold text-theme text-lg">Sombrila negra</h2>
                <section className="flex flex-row gap-1 pl-2">
                <div className='flex flex-col gap-1 basis-[75%]'>
                    <p className='flex gap-1 bg-theme w-24 text-white font-bold text-sm p-1 rounded-lg text-center'>
                        <span>en stock</span>
                        <span>10</span>
                    </p>
                    <p className=" font-bold flex gap-1">
                        <span className="text-sm text-black/70">price:</span>
                        <span className="text-base text-black/70">100.00 $</span>
                    </p>
                </div>
                <ShoppingCartIcon className='self-center text-theme h-8 hover:scale-[1.02]'/>
                </section>
            </div>
        </section>
    )
}