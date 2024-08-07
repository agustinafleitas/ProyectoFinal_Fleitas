import images from "../imagenes/images";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const navbar = ()=> {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <Link to="/"><img src={images.MarcaHorizontal} id="imagen" /></Link> {/*Al hacer click en el icono de "Puppies" redirecciona al inicio*/}
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) =>
                            isActive ? ".nav-link ActiveOption" : "nav-link productos"
                            } 
                            id="inicio" to="/">Inicio</NavLink>
                        </li>

                    <div className="categoriesSeccion">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) =>
                            isActive ? ".nav-link ActiveOption" : "nav-link productos"
                            }
                            aria-current="page" 
                            to="/category/ropa">Ropa</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) =>
                            isActive ? ".nav-link ActiveOption" : "nav-link productos"
                            }
                            to="/category/juguetes">Juguetes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) =>
                            isActive ? ".nav-link ActiveOption" : "nav-link productos"
                            } 
                            to="/category/camas">Camas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) =>
                            isActive ? ".nav-link ActiveOption" : "nav-link productos"
                            } 
                            to="/category/collares">Collares</NavLink>
                        </li>
                    </div>
            
                        <li className="nav-item">
                            <NavLink className={({ isActive }) =>
                            isActive ? ".nav-link ActiveOption" : "nav-link productos"
                            } 
                            id="sobreNosotros" to="/category/About">Sobre nosotros</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex">
                    <CartWidget/> 
                    </form>
                </div>
            </div>
        </nav>
        </div>
    )
};

export default navbar