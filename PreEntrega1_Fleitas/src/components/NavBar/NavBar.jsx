import images from "../imagenes/images"
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const navbar = ()=> {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <img src={images.MarcaHorizontal} id="imagen"/>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" id="inicio" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="productos" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="envios" href="#">Envíos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="sobreNosotros" href="#">Sobre nosotros</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <CartWidget/>
                    </form>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default navbar