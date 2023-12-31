import { product } from '../../Data';
import './Product.css';

const Products = () => {
  return (
    <section className="products" id="products">
      <h1 className="heading">
        our <span>products</span>
      </h1>
      <div className="box-container">
        {product.map((item, index) => (
          <div className="box" key={index * Math.random()}>
            <div className="icons">
              <a href="#icons" className="fas fa-shopping-cart">
                f
              </a>
              <a href="#icons" className="fas fa-heart">
                f
              </a>
              <a href="#icons" className="fas fa-eye">
                f
              </a>
            </div>
            <div className="image">
              <img src={item.img} alt="" />
            </div>
            <div className="content">
              <h3>fresh coffee</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="price">
                $15.99 <span>$20.99</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
