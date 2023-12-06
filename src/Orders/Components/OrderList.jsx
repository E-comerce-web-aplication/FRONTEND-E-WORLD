



export const OrderList =({ children })=>{
    return (
        <div className="justify-center flex flex-col gap-1 m-1 overflow-y-auto md:flex-row md:flex-wrap">
            { children }
        </div>
    )
}