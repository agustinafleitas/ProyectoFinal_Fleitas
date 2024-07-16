import images from "../imagenes/images";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const navbar = ({CartCount})=> {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <Link to="/"><img src={images.MarcaHorizontal} id="imagen" /></Link> {/*Al hacer click en el icono de "Puppies" redirecciona al inicio*/}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" id="inicio" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link productos" to="/category/ropa">Ropa</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link productos" to="/category/juguetes">Juguetes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link productos" to="/category/camas">Camas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link productos" to="/category/collares">Collares</Link>
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