import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import BrandFilter from "./BrandFilter";
import "../css/Products.css";

export class Products extends Component {
  static contextType = DataContext;

  render() {
    const { products, activeBrand } = this.context;
    let productData = products.filter(product =>
      activeBrand == "All" ? product : product.brand == activeBrand
    );
    return (
      <div>
        <BrandFilter />
        <div id="product">
          {productData.map(product => {
            const { capacity, capacityDetails, colors } = product;
            return (
              <>
                <div className="card" key={product._id}>
                  <Link to={`/product/${product._id}`}>
                    <img src={colors[0]?.imageUrl} alt="" />
                  </Link>
                  <div className="content">
                    <h3>
                      <Link to={`/product/${product._id}`}>
                        {product.title}
                      </Link>
                    </h3>
                    <span>${capacityDetails[capacity[0]]?.price}</span>
                    <p>{capacityDetails[capacity[0]]?.description}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;
