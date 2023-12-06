



export const ProductList = ({ children })=>{
    return (
        <ul className="flex flex-col gap-1 h-[90vh] overflow-y-auto justify-center md:flex-row md:flex-wrap">
            {children}
        </ul>
    )
}