import { Footer, Navbar } from "../Common/"



export const CommonLayout = ({ children })=>{
    return(
        <div className="flex flex-col">
            <div className="flex  flex-col sm:flex-row">
                <Navbar/>
                { children }
            </div>
            <Footer/>
        </div>
    )
}