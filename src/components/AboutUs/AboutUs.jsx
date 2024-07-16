import './AboutUs.css'; 
import images from "../imagenes/images";

const AboutUs = () => {
    return (
    <div className="container mt-5">
        <div className="row align-items-center">
            <div className="col-md-12 text-center">
                <div className="huge-text">
                    Transformamos el amor por las mascotas en productos de calidad para que cada perro y gato disfrute de una vida plena y feliz
                </div>
            </div>
        </div>

        <div className="row align-items-center">
            <div className="col-md-6">
                <h1 className='TittleAbout'>Encantados de conocerte</h1>
                <p>
                    Somos <span>Puppies</span> una tienda para mascotas que se preocupa por el bienestar de los amigos peludos.
                </p>
                <p>
                    Nuestra filosofía se basa en la creencia de que las mascotas son miembros queridos de la familia. Fundamos esta tienda con
                    la misión de ofrecer productos de alta calidad que aportan felicidad y bienestar a estos amigos peludos.
                    Ofrecemos desde ropa cómoda y elegante hasta juguetes divertidos, camas acogedoras y comida nutritiva, cada artículo en nuestra tienda
                    está seleccionado con amor y cuidado.
                </p>
                <p>
                    <span className='Mission'>Nuestra misión</span> es brindar productos de calidad que reflejen el amor y la dedicación que sentimos por las mascotas. 
                    Nos esforzamos por ofrecer lo mejor en comodidad, nutrición y diversión para que cada perro y gato disfrute de una vida plena y feliz.
                </p>
            </div>
            <div className="col-md-6">
                <img src={images.AboutImg} className="img-fluid rounded about-us-image" alt="Imagen sobre nosotros" />
            </div>
        </div>

        <div className="row mt-4">
            <div className="col">
                <h1 className='FinalTittle'>Únete a Nuestra Familia</h1>
            </div>
        </div>
        <div className="background-image-container">
            <img src={images.BackgroundAbout} className="img-fluid" alt="Imagen gato y perro" />
        </div>
    </div>
    )
};

export default AboutUs
