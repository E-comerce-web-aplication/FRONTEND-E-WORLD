import './Footer.css'


export const Footer = ()=>{
    return (
        <footer id="footer">
            <div class="contenedor footer-content">
                <div class="contact-us">
                    <h2 class="brand">ES SHOPI</h2>
                    <p>Somos expertos en la gestion de inventarios</p>
                </div>
                <div class="social-media">
                    <a href="./" class="social-media-icon">
                        <i class='bx bxl-facebook'></i>
                    </a>
                    <a href="./" class="social-media-icon">
                        <i class='bx bxl-twitter'></i>
                    </a>
                    <a href="./" class="social-media-icon">
                        <i class='bx bxl-instagram'></i>
                    </a>
                </div>
            </div>
            <div class="line"></div>
        </footer>
    )
}