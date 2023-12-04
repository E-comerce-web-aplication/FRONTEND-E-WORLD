import { Link, useNavigate, useParams } from "react-router-dom"
import { CommonLayout } from "../../Layout"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllRoles } from "../../Store/roles/thunks"
import { RoleList } from "../Components/RoleList"
import { ItemRole } from "../Components/ItemRole"



export const DetailRolePage = ()=>{
    const { roles } = useSelector( state => state.role )
    const { id } = useParams()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch( getAllRoles( 'store', id ) )
    }, [])

  
    return (
        <CommonLayout>
            <main className="flex flex-col gap-1">
                <RoleList>
                    {
                        roles?.map((role)=>(
                            <ItemRole data={role} key={role.id}/>
                        ))
                    }
                </RoleList>
                <Link 
                to={`/roles/create_role?store=${id}`}
                className="w-72 font-bold text-xl text-center pt-1 m-1 self-center h-10 border-2 rounded-lg text-white bg-green-600 border-green-600 hover:scale-[1.02]">Agregar role</Link>
            </main>
        </CommonLayout>
    )
}