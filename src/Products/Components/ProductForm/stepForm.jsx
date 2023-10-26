


export const StepForm = ({ steps })=>{
    return (
        <section className="self-center flex flex-row"> 
            <div className="flex flex-row">
                <p className={`${ steps['step1'] === true ? "border-green-500 bg-green-500 text-white": " border-black/50 text-black/60" } 
                font-bold pt-[2px] rounded-[100%] w-8 h-8 text-center border-2`}>1</p>
                 <div className="w-20 bg-black/50 h-1 self-center">
                    <div className={`h-1 ${ steps['step1'] === true && "animate-progress  bg-green-500"} `}></div>
                </div>
            </div>
            <div className="flex flex-row">
            <p className={`${ steps['step2'] === true ? "border-green-500 bg-green-500 text-white": " border-black/50 text-black/60" } 
                font-bold pt-[2px] rounded-[100%] w-8 h-8 text-center border-2`}>2</p>
                <div className="w-20 bg-black/50 h-1 self-center">
                    <div className={`h-1 ${ steps['step2'] === true && "animate-progress  bg-green-500"} `}></div>
                </div>
            </div>
            <div className="flex flex-row">
            <p className={`${ steps['step3'] === true ? "border-green-500 bg-green-500 text-white": " border-black/50 text-black/60" } 
                font-bold pt-[2px] rounded-[100%] w-8 h-8 text-center border-2`}>3</p>
            </div>
        </section>
    )
}