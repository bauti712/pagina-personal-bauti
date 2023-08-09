import "./header.css";
import "../../multimedia";

export default function Header(){
    return(

        <header>
            <div class="header__superior">
                <div class="logo">
                    <img src="./multimedia/logo dji.jpg" alt="logo"/>
                </div>
                <div class="search">
                    <input type="search"  placeholder="¿Que desea buscar?"/>
                </div>
                <div class="carrito">
                    <a href="./carrito.html">

                        <img src="./multimedia/carrito.png" alt=""/>
                    </a>
                </div>
                <div class ="usuario">
                    <a href="./usuario.html">
                        <img src="./multimedia/usuario-de-perfil.png" alt=""/>
                    </a>

                </div>
            
            </div>
            <div class="container__menu">
                <div class="menu">
                    <nav>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Servicios</a>
                                <ul>
                                    <li><a href="#">Filmación</a></li>
                                    <li><a href="#">Medición de terrenos </a></li>
                                    <li><a href="#">Compra de equiposp</a></li>
                                </ul>
                            
                            </li>
                            <li><a href="#">Nosotros</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Cursos</a></li>
                            <li><a href="#">Contactos</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    )
}

