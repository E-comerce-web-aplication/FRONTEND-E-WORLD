



export const CompanyItem = ({ data })=>{
    return (
        <section className="p-1 border-2 rounded-lg self-center">
            <h2 className="text-xl font-bold text-center">{ data.companyName } Company</h2>
            <section></section>
            <section className="flex gap-1">
                <p className="flex flex-col gap-1">
                    <span>Category:</span>
                    <span>Address:</span>
                </p>
                <p className="flex flex-col gap-1">
                    <span>{ data?.companyCategory?.categoryName }</span>
                    <span>{ data.address }</span>
                </p>
            </section>
        </section>
    )
}