


export const DetailSection = ({ data })=>{
   console.log(data)
    return (
       <section className="flex flex-col gap-1">
          <h2 className="text-center m-1 p-1 font-bold border-2 rounded-lg border-theme text-theme">
            { data?.productName }
         </h2>

         <section className="flex flex-col gap-1 m-1">
            <h2 className="text-xl text-center font-bold">Descripciones de producto</h2>
            <p className="font-medium ml-12 mr-8">{ data?.description }</p>
            <p className="ml-12 mr-8 mt-5 flex gap-1  rounded-md ">
               <span className="text-sm font-bold">Precio:</span>
               <span className="font-bold">{ data?.price } $</span>
            </p>
            <p className="ml-12 mr-8 flex gap-1  rounded-md text-center ">
               <span className="text-sm font-bold">Stock:</span>
               <span className="font-bold">{ data?.stock } </span>
            </p>
         </section>
         <section className="flex flex-col gap-1 ml-10 mr-8 border-2 rounded-lg p-2">
            <h2 className="text-xl font-bold text-center">Descripciones extra</h2>
            <p>
               <span className="font-bold pr-1">Condiciones de envio:</span> 
               { data?.sendConditions }
            </p>
            <section>
            </section>
         </section>
          
       </section>
    )
}