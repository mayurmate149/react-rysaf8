import React, { Component } from "react";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
import Colors from "./Colors";
import PaymentOptions from "./PaymentOptions";
import "../css/Details.css";
import Capacities from "./Capacity";

export class Details extends Component {
  static contextType = DataContext;
  state = {
    product: []
  };

  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.products;
      const { updateSelectedCapacity, updateSelectedColor } = this.context;

      const data = res.filter(item => {
        if (item._id === this.props.match.params.id) {
          updateSelectedCapacity(item.capacity[0]);
          updateSelectedColor(item.colors[0].name);
          return item;
        }
      });

      this.setState({ product: data });
    }
  };

  componentDidMount() {
    this.getProduct();
  }
  render() {
    const { product } = this.state;
    const { selectedCapacity, selectedColor } = this.context;
    return (
      <>
        <Link className="back-btn" to="/">
          back{" "}
        </Link>
        {product.map(item => {
          const { capacity, capacityDetails, colors } = item;
          const color = colors.find(color => color.name === selectedColor);
          return (
            <div className="details" key={item._id}>
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${capacityDetails[selectedCapacity]?.price}</span>
                </div>
                <Colors colors={colors} />
                <Capacities capacities={capacity} />
                <p>{capacityDetails[selectedCapacity]?.description}</p>
                <p>{capacityDetails[selectedCapacity]?.content}</p>
                <PaymentOptions
                  price={capacityDetails[selectedCapacity]?.price}
                />
                <button className="continue" disabled="true">
                  Continue
                </button>
              </div>
              <img src={color?.imageUrl} alt="" />
            </div>
          );
        })}
      </>
    );
  }
}

export default Details;
