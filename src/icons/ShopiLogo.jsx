import { ReactComponent as Logo } from "../../public/Logo.svg"
import { ReactComponent as ShopLogo } from "../../public/Shopi.svg"

export const ShopiLogo = ({ color, whereIcon })=>{

    const whereIconPage = (where)=>{
        if( where == 'menu'){
            return (
                <ShopLogo className="h-16 w-28 md:h-32" fill={color}/>
            )
        }
        if(where == 'auth'){
            return (
                <Logo className="h-full w-full" fill={color}/>
            )
        }
    }

    return(
        <>
        {
            whereIconPage(whereIcon)
        }
        </>
    )
}