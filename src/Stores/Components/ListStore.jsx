



export const ListStore = ({ children })=>{
    return (
        <div className="flex flex-col gap-1 h-[70vh] overflow-y-auto">
            { children }
        </div>
    )
}