import { products } from "../src/App";
import "../src/TableMode.css"
function TableMode(props) {
    return (
        <div className="table-view">
            <div className="title-table-div">
                <h1 className="title-table">{props.title}</h1>
            </div>
            <div className="description-table-div">
                <h2 className="description-table">{props.description}</h2>
            </div>
            <div className="price-table-div">
                <h3 className="price-table">{props.price}</h3>
            </div>
            <div className="img-table-div">
                <img className="img-table" src={props.image} />
            </div>
        </div>
    );
}

function TableView() {
    const modoTabla = products.map((product) => (
        <TableMode
            key={product.id}
            product={product}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
        />
    ));

    return <div className="TableView">{modoTabla}</div>;
}

export { TableMode }
export { TableView }