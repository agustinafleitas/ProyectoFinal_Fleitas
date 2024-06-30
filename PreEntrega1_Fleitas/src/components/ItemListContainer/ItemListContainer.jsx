const Categorias = ['Ropa', 'Comida', 'Juguetes', 'Camas']

const ItemListContainer = ({greetings}) => {
    return (
        <>
            <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <h2 className="bg-info text-white p-3 text-center">{greetings}</h2>
                </div>
            </div>
        </div>
        </>
    );
};

export default ItemListContainer;