const products = [
    {
        id: "1",
        name: "Collar para gatos estilo galaxia",
        price: 400,
        category: "ropa",
        img: "https://m.media-amazon.com/images/I/61m64qh5EVL._AC_.jpg",
        stock: 25,
        description: "Collar para gatos con diseño de galaxia. Incluye chapa de identificación con diseño de planeta.",
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
        name: "Ipad 8va generacion",
        price: 1200,
        category: "tablet",
        img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
        stock: 0,
        description: "Descripcion de Ipad",
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
