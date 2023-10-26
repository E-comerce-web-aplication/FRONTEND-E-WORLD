

export const NextButton = ({ nextRef })=>{
   
    return (
        <button 
        ref={nextRef}
        className="border-2 self-center w-64 m-1 h-10 font-bold rounded-md hover:scale-[1.02]
        bg-theme text-white text-xl hover:bg-orange-400 focus:outline-none focus:scale-[1.02]">
            Next
        </button>
    )
}