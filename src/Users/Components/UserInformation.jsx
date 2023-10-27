


export const UserInformation = ()=>{
    return (
        <section className="self-center flex flex-col">
            <h2 className="border-b-2 border-black font-bold p-1 m-1 text-lg">Kalet Adonay Chavez</h2>
            <section className="flex">
                <div className="h-10 p-1 pt-[6px] m-1 border-2 rounded-md border-blue-500">
                    <p className="font-semibold text-blue-500">Owner by Fresh</p>
                </div>
                <div className="p-1 flex flex-col gap-1">
                    <p className="flex gap-1 border-2 rounded-lg">
                        <span className="self-center font-semibold">User by: </span>
                        <span className="font-semibold p-1">12/23/2004</span>
                    </p>
                    <p className="flex flex-col gap-1 border-2 rounded-md">
                        <span className="font-semibold border-b-2 text-center">About me</span>
                        <span className="max-w-[10rem] p-1 text-sm font-semibold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat esse maiores consectetur itaque</span>
                    </p>
                </div>
            </section>
        </section>
    )
}