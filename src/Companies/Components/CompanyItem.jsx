



export const CompanyItem = ({ data })=>{
    return (
        <section className=" flex gap-2 p-1 border-2 rounded-lg self-center w-[25rem] hover:scale-[1.02] cursor-pointer">
            <h2 className="text-xl font-bold pl-2 self-center">{ data.companyName } Company</h2>
            <section className="flex flex-col gap-1 self-center">
                <p className="flex gap-1 w-[15rem]">
                    <span className="text-sm font-bold">Category:</span>
                    <span>{ data?.companyCategory?.categoryName }</span>
                </p>
                <p className="flex flex-col gap-1">
                    <span className="text-sm font-bold">Address:</span>
                    <span>{ data.address }</span>
                </p>
                <button className="self-end rounded-lg p-1 text-white bg-green-800 font-bold hover:scale-[1.02] text-sm ">Pedir catalogo</button>
            </section>
        </section>
    )
}