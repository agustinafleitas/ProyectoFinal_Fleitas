import './AboutUs.css'; 
import images from "../imagenes/images";

const AboutUs = () => {
    return (
        <div className="container mt-5">
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
                </div>
                <div className="col-md-6">
                    <img src={images.AboutImg} className="img-fluid rounded about-us-image" alt="Imagen sobre nosotros" />
                </div>

                <div className="row mt-4">
                    <div className="col">
                        <h3>Nuestra historia</h3>
                        <p>
                            Nuestra misión es brindar productos de calidad que reflejen el amor y la dedicació
                            que sentimos por las mascotas. Nos esforzamos por ofrecer lo mejor en comodidad, nutrición
                            y diversión para que cada perro y gato disfrute de una vida plena y feliz.
                                <ul className="list-unstyled">
                                    <li>
                                        <strong>Calidad:</strong> Nos comprometemos a ofrecer solo productos de la más alta calidad.
                                    </li>
                                    <li>
                                        <strong>Amor y cuidado:</strong> Seleccionamos cada artículo pensando en el bienestar de las mascotas.
                                    </li>
                                    <li>
                                        <strong>Compromiso:</strong> Estamos dedicados a mejorar la vida de las mascotas y sus dueños.
                                    </li>
                                </ul>
                        </p>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col">
                        <h1 className='TittleAbout'>Únete a Nuestra Familia</h1>
                        <p>
                            Te invitamos a explorar nuestra tienda y descubrir cómo nuestros productos pueden enriquecer 
                            la vida de tus mascotas. Juntos, podemos asegurarnos de que cada perro y gato reciba el amor 
                            y la atención que se merece.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUs
