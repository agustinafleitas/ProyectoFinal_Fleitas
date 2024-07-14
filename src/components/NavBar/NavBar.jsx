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
                            <Link className="nav-link" id="inicio" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link productos" to="/category/ropa">Ropa</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link productos" to="/category/juguete">Juguetes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link productos" to="/category/cama">Camas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link productos" to="/category/alimento">Alimentos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" id="sobreNosotros" to="/category/About">Sobre nosotros</Link>
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