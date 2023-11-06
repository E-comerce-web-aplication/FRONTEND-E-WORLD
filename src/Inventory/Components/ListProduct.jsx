



export const ListProduct = ({ children })=> {
    return (
        <ul className="flex flex-col gap-1 overflow-y-auto h-[100vh]">
            { children }
        </ul>
    )
}