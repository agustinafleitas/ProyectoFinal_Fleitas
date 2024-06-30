const Categorias = ['Ropa', 'Comida', 'Juguetes', 'Camas']

const ItemListContainer = ({greetings}) => {
    return (
        <>
            <div className="container mt-4">
            <div className="row">
                <div className="col">
                    <h2 className="display-4 text-info text-center border border-info p-3 rounded">{greetings}</h2>
                </div>
            </div>
        </div>
        </>
    );
};

export default ItemListContainer;