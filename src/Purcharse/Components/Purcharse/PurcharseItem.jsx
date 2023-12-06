


export const PurcharseItem = ({ data }) => {
    return (
        <section className=" hover:scale-[1.02] flex flex-col gap-2 m-1 border-2 p-1 rounded-md w-80">
            <h2 className="font-bold text-end">{ data?.date}</h2>
            <p className="flex gap-1 font-bold">
                <span>ID Usuario que realizo la compra:</span>
                <span> { data?.userId }</span>
            </p>
            <p className="flex gap-1 font-bold">
                <span>Total de compra:</span>
                <span className="text-xl">{ data?.total } $</span>
            </p>
        </section>
    )
}