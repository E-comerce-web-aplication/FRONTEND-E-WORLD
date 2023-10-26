import { PlusIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'



export const CreateProductButton = ()=>{
   const navigate = useNavigate()

   const onChangeCreatePage = ()=>{
      navigate({
         pathname: '/products/create'
      })
   }

    return (
       <button
       onClick={onChangeCreatePage}
       className='fixed right-3 bottom-14 rounded-full p-1 w-12 h-12 bg-theme
        hover:animate-spin hover:bg-theme/80'>
          <PlusIcon className='text-white'/>
       </button>
    )
}