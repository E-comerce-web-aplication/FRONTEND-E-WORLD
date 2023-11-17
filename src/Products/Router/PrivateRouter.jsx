import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"



export const PrivateRouter = ({ children, session })=>{
    const { organizationSession } = useSelector( state => state.user )

    return ( organizationSession !== session ) 
    ? children
    : <Navigate to="/products" /> 

}