


export const DetailSection = ({ data })=>{
   console.log(data)
    return (
       <section className="flex flex-col gap-1">
          <h2 className="text-center m-1 p-1 font-bold border-2 rounded-lg border-theme text-theme md:text-2xl">
            { data?.productName }
         </h2>

         <section className="flex flex-col gap-1 m-1">
            <h2 className="text-xl text-center font-bold md:text-2xl">Descripciones de producto</h2>
            <p className="font-medium ml-12 mr-8 md:text-xl">{ data?.description }</p>
            <p className="ml-12 mr-8 mt-5 flex gap-1  rounded-md ">
               <span className="text-sm font-bold md:text-base">Precio:</span>
               <span className="font-bold md:text-xl">{ data?.price }.00 $</span>
            </p>
            <p className="ml-12 mr-8 flex gap-1  rounded-md text-center ">
               <span className="text-sm font-bold md:text-base">Stock:</span>
               <span className="font-bold md:text-xl">{ data?.stock } </span>
            </p>
         </section>
         <section className="flex flex-col gap-1 ml-10 mr-8 border-2 rounded-lg p-2">
            <h2 className="text-xl font-bold text-center md:text-2xl">Descripciones extra</h2>
            <p>
               <span className="font-bold pr-1 md:text-xl">Condiciones de envio:</span> 
               <span className="md:text-lg">{ data?.sendConditions }</span>
            </p>
            <section>
            </section>
         </section>
          
       </section>
    )
}