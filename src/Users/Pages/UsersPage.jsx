import { useDispatch, useSelector } from "react-redux"
import { CommonLayout } from "../../Layout"
import { useEffect } from "react"
import { getAllUsers } from "../../Store/users/thunks"
import { UserList } from "../Components/ListUsers/UserList"
import { ItemUser } from "../Components/ListUsers/ItemUser"
import { useNavigate } from "react-router-dom"

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
    return (
        <CommonLayout>
            <main className="flex flex-col gap-1 h-[100vh] justify-center">
                <h2 className="text-3xl font-bold text-center">Usuarios de tu organizacion</h2>
                <UserList>
                    {
                        users?.store?.map((user)=>(
                            <ItemUser data={ user } key={user.id}/>
                        ))
                    }
                </UserList>
                <button 
                onClick={onChangeFormUserCreate}
                className="border-2 rounded-lg w-56 self-center h-10 font-bold bg-green-600 border-green-600 text-white text-xl hover:scale-[1.02]" >Agregar usuario</button>
            </main>
        </CommonLayout>
    )
}