import { ReactComponent as Logo } from "../../public/logo.svg"

export const ShopiLogo = ({ color })=>{
    return(
        <Logo className="h-14 w-20" fill={color}/>
    )
}