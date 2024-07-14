const products = [
    {
        id: "1",
        name: "Collar para gatos estilo galaxia",
        price: 400,
        category: "ropa",
        img: "https://i.pinimg.com/564x/51/89/7b/51897b0bd80923fe4c8dc820fcc1a900.jpg",
        stock: 25,
        description: "Collar para gatos con diseño de galaxia. Incluye chapa de identificación con diseño de astronauta.",
    },
    {
        id: "2",
        name: "Collar elegante para perro pequeños",
        price: 400,
        category: "ropa",
        img: "https://m.media-amazon.com/images/I/613ror+52OL._AC_UF894,1000_QL80_.jpg",
        stock: 16,
        description: "Collar elegante blanco y negro de tela para perros pequeños. Fácil de lavar",
    },
    {
        id: "3",
        name: "Cama forma de gato",
        price: 1000,
        category: "cama",
        img: "https://m.media-amazon.com/images/I/616UW2sxpxL._AC_UF350,350_QL80_.jpg",
        stock: 0,
        description: "Cama para mascotas de color negro con forma de gatos. Comoda y calentita, para que sus mascotas duerman felices",
    },
    {
        id: "4",
        name: "Huesito chillon",
        price: 200,
        category: "juguete",
        img: "https://f.fcdn.app/imgs/bc3149/www.elclon.com.uy/clonuy/be0a/original/catalogo/810920-1/460_460/juguete-para-mascota-tipo-hueso-con-chifle-juguete-para-mascota-tipo-hueso-con-chifle.jpg",
        stock: 4,
        description: "Juguete de huesito chillon, ideal para las mascotas juguetonas",
    },
    {
        id: "5",
        name: "Whiskas para gatitos 2-12",
        price: 300,
        category: "alimento",
        img: "https://images.rappi.com.uy/products/820172424753_rebgztsifvvm_232597615745_oycvhyktfsta_55096_1.png",
        stock: 10,
        description: "Alimentos marca Whiskas para gatitos entre 2 y 12. Sabor carne y leche ",
    },
    {
        id: "6",
        name: "Monello Cat sabor salmón, atun y pollo",
        price: 200,
        category: "alimento",
        img: "https://petcol.co/cdn/shop/products/3-1-500x500_500x.png?v=1574804595",
        stock: 8,
        description: "Alimento para gatos marca Monello. Sabor salmón, atun y pollo"
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
