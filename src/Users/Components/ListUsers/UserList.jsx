


export const UserList = ({ children }) => {
    return (
        <div className="flex flex-col gap-2 overflow-y-auto  md:flex-row md:flex-wrap">
            { children }
        </div>
    )
}