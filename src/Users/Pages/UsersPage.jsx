import { useDispatch, useSelector } from "react-redux"
import { CommonLayout } from "../../Layout"
import { useEffect } from "react"
import { getAllUsers } from "../../Store/users/thunks"
import { UserList } from "../Components/ListUsers/UserList"
import { ItemUser } from "../Components/ListUsers/ItemUser"
import { useNavigate } from "react-router-dom"
import { ItemUserCOmpany } from "../Components/ListUsers/ItemUserCompany"
import { PlusCircleIcon } from "@heroicons/react/24/solid"

export const UserPage = ()=>{

    const navigate = useNavigate()
    const { userOwner, users } = useSelector( state => state.user )
    const company = useSelector( state => state.company )
    const { token } = useSelector( state => state.auth )
    const dispatch = useDispatch()
 
    useEffect(()=>{
        dispatch(getAllUsers( userOwner?.companyOwner?.id, company.stores[0].id,token  ))
    }, [ ])


    const onChangeFormUserCreate = ()=>{
        navigate({
            pathname: '/users/create_user'
        })
    }
    console.log(users)
    return (
        <CommonLayout>
            <main className="flex flex-col gap-1 h-[100vh] m-1">
                <h2 className="text-3xl md:text-4xl font-bold text-center border-dashed border-theme border-2 self-center p-1 rounded-lg text-theme mb-8 mt-2">Usuarios de tu organizacion</h2>
                <UserList>
                    {
                        users?.store?.map((user)=>(
                            <ItemUser data={ user } key={user.id}/>
                        ))
                    }
                    {
                        users?.company?.map((user)=>(
                            <ItemUserCOmpany data={ user } key={user.id}/>
                        ))
                    }
                </UserList>
                <div className="flex rounded-lg border-2 gap-1 fixed bottom-32 right-1 p-1  bg-green-600 border-green-600">
                <button 
                onClick={onChangeFormUserCreate}
                className="self-end h-10 font-bold text-white text-xl hover:scale-[1.02]" >Agregar usuario</button>
                <PlusCircleIcon className="h-8 self-center text-white hover:animate-spin cursor-pointer"/>
                </div>
            </main>
        </CommonLayout>
    )
}