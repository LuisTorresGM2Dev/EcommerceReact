import { products } from "../src/App"

function Card(props){
    return(
            <div className="Card">
            <img src={props.image} alt="" />
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{props.price}</p>
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
      image= {product.image}
      title = {product.title}
      description = {product.description}
      price = {product.price}
      />
    )
    );
  
    return <div className="ProductList">{productCards}</div>;
  }
export { Card }
export { ProductList }