import { CommonLayout } from "../../Layout"
import { ListRegister } from "../Components/ListRegister"
import { ItemRegister } from "../Components/ItemRegister"
import { DetailRegister } from "../Components/DetailRegister"
import { useState } from "react"

export const RegisterPage = ()=>{
    const items = [1,2,3,4,5,6,7,8]

    const [ openDetail, setOpenDetail ] = useState(false)

    const onCloseDetail = ()=>{
        setOpenDetail(false)
    }

    const onOpenDetail = ()=>{
        setOpenDetail(true)
    }

    return(
        <CommonLayout>
            <main className="flex flex-col gap-1">
                <h2 className="self-center p-1 border-2 font-bold bg-theme rounded-lg text-white text-xl">Historial de actividad de los usuarios</h2>
                <ListRegister>
                    {
                        items.map((i)=>(
                            <ItemRegister key={i} onOpen={onOpenDetail} />
                        ))
                    }
                </ListRegister>
                {
                   openDetail && (<DetailRegister closeDetail={onCloseDetail}/>)
                }
            </main>
        </CommonLayout>
    )
}