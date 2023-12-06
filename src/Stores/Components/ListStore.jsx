



export const ListStore = ({ children })=>{
    return (
        <div className="flex flex-col gap-1 h-[70vh] overflow-y-auto md:flex-row md:flex-wrap justify-center">
            { children }
        </div>
    )
}