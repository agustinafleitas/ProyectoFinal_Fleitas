import images from "../imagenes/images";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const navbar = ({CartCount})=> {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <img src={images.MarcaHorizontal} id="imagen"/>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" id="inicio" to="/category/inicio">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="productos" to="/category/productos">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="envios" to="/category/envios">Envíos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="sobreNosotros" to="/category/sobreNosotros">Sobre nosotros</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                    <CartWidget CartCount={CartCount}/> 
                    </form>
                </div>
            </div>
        </nav>
        </div>
    )
};

export default navbar