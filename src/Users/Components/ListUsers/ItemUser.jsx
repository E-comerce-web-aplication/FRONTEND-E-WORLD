


export const ItemUser = ({ data })=>{
    const information = data.informationUserCompanyStore

    return (
        <div className="self-center flex flex-col gap-1 border-2 rounded-lg p-1 m-1 max-w-[28rem]">
            <div className="flex gap-1 border-b-2 border-black/70">
                <p className="flex gap-1 text-2xl font-bold">
                { information?.displayName }
                </p>
                {
                    data.companyStore !== null && (
                        <p className="ml-auto w-36 font-bold border-2 rounded-lg p-1 text-sm">Usuario de tienda</p>
                    )
                }
            </div>
            <p className="flex gap-1">
                <span>Email:</span>
                <span>{ information?.email }</span>
            </p>
            <p className="flex gap-1">
                <span>Role:</span>
                <span>Administrador</span>
            </p>
        </div>
    )
}