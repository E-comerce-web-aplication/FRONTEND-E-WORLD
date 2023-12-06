import { Link, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { Footer } from '../Components'
import { useState } from "react"
import './Home.css'

export const HomePage = () => {
    const dispatch =useDispatch()
    const [ openMenu, setOpenMenu ] = useState(false)
    const { status } = useSelector( state => state.auth )

    const onSigOut = ()=>{
        dispatch( signOut({ 
            status: 'no-authenticated'
        }) )
    }

    const onOpenMenu = ()=>{
        setOpenMenu(!openMenu)
    }
    
    return (
        <>
            <header className="header" id="inicio">
                <img 
                onClick={onOpenMenu}
                className="hamburguer" src="/public/img/hamburguesa.svg" alt=""/>
               {
                openMenu === true && (
                    <nav onClick={onOpenMenu} className="menu-navegacion">
                        <Link to="/auth/login" className="border-2 p-1 rounded-lg text-lg text-white font-bold" >Inicia sesion </Link> 
                        <a href="#inicio">Inicio</a>
                        <a href="#servicio">Quienes somos</a>
                        <a href="#galeria">Clientes</a>
                        <a href="#expertos">Especializados</a>
                        <a href="#footer">Contacto</a>
                        
                    </nav>
                )
               }
                <div class="contenedor head">
                    <h1 class="titulo">BIENVENIDO A  ES-SHOPI</h1>
                    <p class="copy">Tu plataforma de confianza</p>
                </div>
         
            </header>
            <main>
        <section class="services contenedor" id="servicio">
            <h2 class="subtitulo">¿Quienes somos?</h2>
            <div class="contenedor-servicio">
                <img src="/public/img/checklist.svg" alt=""/>
                <div class="checklist-servicio">
                    <div class="service">
                        <h3 class="n-service"><span class="number">1</span>Mision</h3>
                        <p> "Facilitar la eficiencia y el éxito empresarial a través de soluciones integrales de
                            comercio y gestión de inventario, proporcionando datos en tiempo real y mejorando la
                            experiencia del cliente."</p>
                    </div>
                    <div class="service">
                        <h3 class="n-service"><span class="number">2</span>Vision</h3>
                        <p> "Convertirnos en la plataforma líder reconocida por transformar la gestión empresarial
                            mediante soluciones innovadoras, anticipando y abordando los desafíos futuros para impulsar
                            el crecimiento de las empresas."</p>
                    </div>
                    <div class="service">
                        <h3 class="n-service"><span class="number">3</span>Descripción</h3>
                        <p>  Plataforma integral para optimizar el comercio y la gestión de inventario.
                            Automatiza procesos, garantiza entregas oportunas y mejora la experiencia del cliente,
                            impulsando la eficiencia y el éxito empresarial con soluciones innovadoras.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="gallery" id="galeria">
            <div class="contenedor">
                <h2 class="subtitulo">Clientes</h2>
                <div class="contenedor-galeria">
                    <img src="/public/img/inventario 1.jpg" class="img-galeria" alt="Hola"/>
                    <img src="/public/img/inventario 2.jpg" class="img-galeria" alt=""/>
                    <img src="/public/img/inventario 3.jpg" class="img-galeria" alt=""/>
                    <img src="/public/img/inventario 4.jpg" class="img-galeria" alt=""/>
                    <img src="/public/img/inventario 5.jpg" class="img-galeria" alt=""/>
                    <img src="/public/img/inventario 6 .jpg" class="img-galeria" alt=""/>
                </div>
            </div>
        </section>
        <div class="imagen-light">
            <img src="/public/img/close.svg" alt="" class="close"/>
            <img src="" alt="" class="agregar-imagen"/>
        </div>
        <section class="contenedor" id="expertos">
            <h2 class="subtitulo">Expertos en:</h2>
            <section class="experts">
                <div class="cont-expert">
                    <img src="/public/img/pie_chart.svg" alt=""/>
                    <h3 class="n-expert">Analisis</h3>
                </div>
                <div class="cont-expert">
                    <img src="/public/img/search_engine.svg" alt=""/>
                    <h3 class="n-expert">Liderazgo</h3>
                </div>
                <div class="cont-expert">
                    <img src="/public/img/security.svg" alt=""/>
                    <h3 class="n-expert">Seguridad</h3>
                </div>
            </section>
        </section>
    </main>
    <Footer/>
        </>
    )
}