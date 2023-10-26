



export const ProductList = ({ children })=>{
    return (
        <ul className="flex h-[75vh] flex-col gap-1 overflow-y-auto">
            {children}
        </ul>
    )
}