import images from "./images"

const navbar = ()=>{
    return(
        <nav>
            <img src={images.MarcaFull} alt="" />
            <ul>
                <li>Home</li>
                <li>Sobre nosotros</li>
                <li>Productos</li>
                <li>Envios</li>
            </ul>
        </nav>
    )
}

export default navbar