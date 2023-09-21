import { products } from "../src/App";
import "../src/card.css";


function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt="" className="img-products" />
      <div className="card-content">
        <p className="title-card">{props.title}</p>
        <p className="description-card">{props.description}</p>
        <p className="price-card">${props.price}</p>
      </div>
      <div className="actions">
        <button>Recomendar</button>
        <button>Comprar</button>
      </div>
    </div>
  );
}

function ProductList() {
  const productCards = products.map((product) => (
    <Card
      key={product.id}
      product={product}
      image={product.image}
      title={product.title}
      description={product.description}
      price={product.price}
    />
  ));

  return <div className="ProductList">{productCards}</div>;
}
export { Card };
export { ProductList };
