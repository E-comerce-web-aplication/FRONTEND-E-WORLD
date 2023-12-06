import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const OptionButtons = ()=>{

    const { organizationSession } = useSelector( state => state.user )
   

    return (
        <section className="flex flex-col gap-2 md:mt-11">
            <h2 className="text-center font-bold text-theme border-2 border-theme p-1 rounded-md md:text-xl">
                Haz una revision de tus opciones</h2>

            {
                organizationSession === 'owner' && (
                    <section className="flex flex-col gap-1">
                        <Link to="/company/information" className="border-2 rounded-md p-1 font-semibold text-center md:text-lg hover:scale-[1.02] border-black/5 text-white bg-theme
                        hover:text-theme hover:bg-white hover:border-theme">
                        Ver compañias
                        </Link>
                        <Link to="/users/" className="border-2 rounded-md p-1 font-semibold text-center md:text-lg hover:scale-[1.02] border-black/5 text-white bg-theme
                        hover:text-theme hover:bg-white hover:border-theme">
                            Ver usuarios
                        </Link>
                        <Link to="/stores/" className="border-2 rounded-md p-1 font-semibold text-center md:text-lg hover:scale-[1.02] border-black/5 text-white bg-theme
                        hover:text-theme hover:bg-white hover:border-theme ">
                            Ver tiendas
                        </Link>
                        <Link to="/roles/" className="border-2 rounded-md p-1 font-semibold text-center  md:text-lg hover:scale-[1.02] border-black/5 text-white bg-theme
                        hover:text-theme hover:bg-white hover:border-theme">
                            Ver roles
                        </Link>
                    </section>
                )
            }
        </section>
    )
}