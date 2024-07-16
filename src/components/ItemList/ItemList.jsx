import { Item } from "../Item/Item"

export const ItemList = ({ products }) => {
return (
    <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {products.map((prod) => (
            <div key={prod.id} className="col">
                <Item {...prod} />
            </div>
            ))}
        </div>
    </div>
    );
};