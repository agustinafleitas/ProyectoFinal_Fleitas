const products = [
    {
        id: "1",
        name: "Collar para mascotas estilo galaxia",
        price: 399,
        category: "collares",
        img: "https://i.pinimg.com/564x/51/89/7b/51897b0bd80923fe4c8dc820fcc1a900.jpg",
        stock: 25,
        description: "Dale a tu mascota un toque de estilo cósmico con este impresionante collar con diseño de galaxia. Perfecto para los aventureros de cuatro patas, este collar combina moda y funcionalidad. Además, incluye una chapa de nombre con diseño de astronauta, añadiendo un detalle único y personalizable que hará que tu mascota destaque en cualquier lugar.",
    },
    {
        id: "2",
        name: "Collar elegante con forma de corbata para mascotas",
        price: 339,
        category: "collares",
        img: "https://i.pinimg.com/564x/d6/d9/0d/d6d90d583ba3d7db42906828f12bfdbc.jpg",
        stock: 16,
        description: "Haz que tu mascota luzca elegante y con estilo con este encantador collar con forma de corbata. Perfecto para ocasiones especiales o simplemente para añadir un toque de sofisticación a los paseos diarios, este collar con rayas azules y marrones hará que tu amigo peludo sea el centro de atención.",
    },
    {
        id: "3",
        name: "Cama marrón acolchada para perros",
        price: 1260,
        category: "camas",
        img: "https://i.pinimg.com/564x/95/e3/f6/95e3f6c1009efeab3f0e5aad721ac939.jpg",
        stock: 0,
        description: "Cama acolchada color marrón para mascotas. Cómoda y calentita, para que sus mascotas duerman felices",
    },
    {
        id: "4",
        name: "Huesito chillon",
        price: 200,
        category: "juguetes",
        img: "https://f.fcdn.app/imgs/bc3149/www.elclon.com.uy/clonuy/be0a/original/catalogo/810920-1/460_460/juguete-para-mascota-tipo-hueso-con-chifle-juguete-para-mascota-tipo-hueso-con-chifle.jpg",
        stock: 4,
        description: "Mantén a tu perro entretenido y activo con este divertido juguete chillón en forma de hueso. Diseñado para atraer la atención de tu mascota con su sonido chirriante y su forma ergonómica, este juguete es perfecto para sesiones de juego y entrenamiento. ¡Tu perro no podrá resistirse!",
    },
    {
        id: "5",
        name: "Correa de cuerda suave de colores pastel",
        price: 579,
        category: "collares",
        img: "https://i.pinimg.com/564x/01/c5/14/01c51418efc095b34c3d2e4c78ad6542.jpg",
        stock: 10,
        description: "Lleva a tu mascota a pasear con estilo y comodidad con esta hermosa correa de cuerda suave en colores pastel. Perfecta para perros y gatos, esta correa combina durabilidad y diseño encantador, asegurando paseos agradables y seguros para ti y tu amigo peludo.",
    },
    {
        id: "6",
        name: "Combo correa y collar de cuerda suave",
        price: 1199,
        category: "collares",
        img: "https://i.postimg.cc/8zQ0YD2q/8016f587087d025dc233e0fbdf82d17e-removebg-preview.png",
        stock: 8,
        description: "Ofrece a tu mascota un conjunto completo de elegancia y comodidad con este combo de correa y collar de cuerda suave. Diseñado con materiales de alta calidad y colores encantadores, este combo asegura paseos agradables y con estilo, proporcionando tanto funcionalidad como estética."
    },
    {
        id: "7",
        name: "Pañuelo verde inspirado en el Grinch",
        price: 459,
        category: "collares",
        img: "https://i.pinimg.com/564x/35/c2/bd/35c2bd72de54e187cffb999d19f70a42.jpg",
        stock: 12,
        description: "Deja que tu mascota entre en el espíritu festivo con este adorable pañuelo inspirado en el Grinch. Con su color verde vibrante y la icónica sonrisa del Grinch, este pañuelo no solo añade un toque de diversión a cualquier ocasión, sino que también mantiene a tu amigo peludo cómodo y con estilo."
    },
    {
        id: "8",
        name: "Pañuelo florar color rosa para mascotas",
        price: 499,
        category: "collares",
        img: "https://muymolon.com/wp-content/uploads/2017/10/il_570xN.1336223359_batz.jpg",
        stock: 16,
        description: "Bandana florar color rosa para mascotas. Ideal para nuestros amigos peludos, para que puedan pasear con estilo"
    },
    {
        id: "9",
        name: "Collar rosa decorado con sandías",
        price: 299,
        category: "collares",
        img: "https://i.pinimg.com/564x/f6/9f/8e/f69f8e949704be9636173ede16339249.jpg",
        stock: 15,
        description: "Dale a tu mascota un estilo fresco y veraniego con este encantador collar rosa decorado con dibujos de sandías. Perfecto para agregar un toque de diversión y color a los paseos diarios, este collar combina diseño adorable con funcionalidad, asegurando que tu amigo peludo luzca a la moda."
    },
    {
        id: "10",
        name: "Cama de color blanca con rayas de colores para mascotas",
        price: 1059,
        category: "camas",
        img: "https://i.pinimg.com/564x/9c/73/9c/9c739c97cd5ded37e28c22f7707c8efc.jpg",
        stock: 1,
        description: "Cama acolchada color blanca con rayas verde, roja, amarilla y negro. Fácil de lavar, con diseño sencillo, perfecta para asegurar que tu mascota duerma cómoda.",
    },
    {
        id: "11",
        name: "Banana transformada en cama para mascotas",
        price: 1299,
        category: "camas",
        img: "https://i.pinimg.com/564x/a2/2b/a9/a22ba9f7fa49433a9c514fe410afafa4.jpg",
        stock: 3,
        description: "Transforma el descanso de tu mascota con esta adorable y divertida cama en forma de banana. Perfecta para una siesta acogedora o un momento de privacidad, esta cama ofrece comodidad y estilo. Diseñada con una tapa semiabierta que se puede pelar, imitando la cáscara de una banana, ¡tu amigo peludo la adorará!",
    },
    {
        id: "12",
        name: "Piña convertida en cama para mascotas",
        price: 1299,
        category: "camas",
        img: "https://i.pinimg.com/564x/ef/9f/df/ef9fdf77518bb72bd557608d397e42f8.jpg",
        stock: 2,
        description: "Piña convertida en una divertida, cómoda y calentita cama para mascotas. Esta divertida cama ofrece un lugar acojedor para que tu amigo peludo duerma feliz.",
    },
    {
        id: "13",
        name: "Ducky, el pato de peluche",
        price: 759,
        category: "juguetes",
        img: "https://i.pinimg.com/564x/d0/d6/f9/d0d6f98bfe814f40577867bdff677f33.jpg",
        stock: 6,
        description: "Ducky es un pato de peluche que busca un amigo peludo para ser su amigo. Es un peluche divertido, amigable y que le gusta los baños en el lavarropas.",
    },
    {
        id: "14",
        name: "Hueso de lana",
        price: 389,
        category: "juguetes",
        img: "https://i.pinimg.com/564x/21/c0/82/21c0824f2c3092a7d096342f448aa078.jpg",
        stock: 6,
        description: "Hueso de lana que asegura varias horas de diversión con tu mascota. Es divertido, colorido, seguro y fácil de lavar con el lavarropas.",
    },
    {
        id: "15",
        name: "Sudadera colorida con capucha para perros",
        price: 959,
        category: "ropa",
        img: "https://i.postimg.cc/jqQzJgjR/image-removebg-preview-2.png",
        stock: 20,
        description: "Añade un toque de color y comodidad al guardarropa de tu perro con esta sudadera vibrante y acogedora. Perfecta para mantener a tu mascota abrigada en los días frescos, esta sudadera con capucha combina estilo y funcionalidad, garantizando que tu perro luzca adorable y se sienta cómodo en cualquier ocasión.",
    },
    {
        id: "16",
        name: "Sudadera con diseño de dinosaurio para gatos",
        price: 1039,
        category: "ropa",
        img: "https://i.postimg.cc/xTQqLn4Z/image-removebg-preview-3.png",
        stock: 18,
        description: "Haz que tu gato se sienta como un verdadero dinosaurio con esta divertida y acogedora sudadera en color negro y rojo. Perfecta para mantener a tu felino abrigado y con estilo, esta sudadera combina moda y funcionalidad, haciendo que tu mascota luzca única y encantadora.",
    },
    {
        id: "17",
        name: "Impermeable de lluvia color naranja para perros ",
        price: 849,
        category: "ropa",
        img: "https://i.pinimg.com/564x/df/db/c3/dfdbc345172889ebdbc1419da6946a58.jpg",
        stock: 25,
        description: "Mantén a tu perro seco y protegido en los días lluviosos con este vibrante impermeable color naranja. Diseñado para combinar funcionalidad y estilo, este impermeable es perfecto para mantener a tu amigo peludo cómodo y visible durante sus paseos bajo la lluvia.",
    },
    {
        id: "18",
        name: "Suéter de color marrón para perros",
        price: 999,
        category: "ropa",
        img: "https://i.postimg.cc/T15dgZqv/image-removebg-preview.png",
        stock: 30,
        description: "Mantén a tu perro abrigado y con estilo durante los días frescos con este elegante suéter de color marrón. Ideal para paseos al aire libre y momentos acogedores en casa, este suéter combina moda y funcionalidad, asegurando que tu mascota esté cómoda y protegida del frío.",
    },
    {
        id: "19",
        name: "Suéter con diseño de color azul para gatos",
        price: 999,
        category: "ropa",
        img: "https://i.pinimg.com/564x/f4/15/1a/f4151a760f617d5e03cba0ce3a571347.jpg",
        stock: 28,
        description: "Mantén a tu gato abrigado y con estilo con este elegante suéter de color azul. Perfecto para los días fríos y las noches frescas, este suéter combina confort y moda, asegurando que tu felino se sienta cómodo y protegido mientras luce adorable.",
    },
    {
        id: "20",
        name: "Campera con capucha de color azul para perros",
        price: 715,
        category: "ropa",
        img: "https://i.pinimg.com/564x/d3/9c/4a/d39c4a0c50f8d1a5d630d197156404c8.jpg",
        stock: 31,
        description: "Mantén a tu perro abrigado y protegido con esta elegante campera de color azul. Diseñada para brindar calidez y estilo, esta campera es perfecta para los días fríos y ventosos, asegurando que tu amigo peludo se sienta cómodo y a la moda durante sus paseos al aire libre.",
    },
    {
        id: "21",
        name: "Sudadera con capucha de color azul para gatos",
        price: 959,
        category: "ropa",
        img: "https://i.postimg.cc/qqdd9zHg/f8ca57e6f22bbc78b26b88043036ebff-removebg-preview.png",
        stock: 30,
        description: "Mantén a tu gato abrigado y con estilo con esta encantadora sudadera con capucha de color azul. Perfecta para los días fríos y las noches frescas, esta sudadera combina moda y funcionalidad, asegurando que tu felino se sienta cómodo y protegido mientras luce adorable.",
    },
    {
        id: "22",
        name: "Impermeable para lluvia con diseño de rana para gatos",
        price: 899,
        category: "ropa",
        img: "https://i.postimg.cc/Jhbxpnxp/272560a419ab6fb439db0cca6e0f3bc5-removebg-preview.png",
        stock: 14,
        description: "Protege a tu gato de la lluvia con este encantador impermeable con diseño de rana. Con su divertido y colorido estilo, este impermeable no solo mantiene a tu felino seco y cómodo, sino que también añade un toque de diversión a sus paseos bajo la lluvia.",
    },
    {
        id: "23",
        name: "Perez, el ratoncito de juguete",
        price: 1890,
        category: "juguetes",
        img: "https://i.pinimg.com/564x/6c/7f/f1/6c7ff196571fcb7a194a78c71cb6c86a.jpg",
        stock: 10,
        description: "Presentamos a Perez, el ratón robot de juguete que mantendrá a tu gato entretenido y activo durante horas. Diseñado para simular el movimiento real de un ratón, Perez es el compañero de juego perfecto para estimular los instintos naturales de caza de tu felino, proporcionando diversión y ejercicio sin fin.",
    },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(products);
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1000);
    });
};

export const getProductById = (productoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productoId));
        }, 1000);
    });
};
