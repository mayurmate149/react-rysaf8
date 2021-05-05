import React, { useState, useContext } from "react";
import { DataContext } from "../Context";
import "../css/PaymentOptions.css";

const PaymentOptions = function(price) {
  // const { selectedColor, updateSelectedColor } = useContext(DataContext);
  return (
    <div className="mt-md mb-md">
      <h3 className="option-heading">Choose Payment Options</h3>
      <div className="payment-option-container">
        <div>Pay in full</div>
        <div>Pay monthly</div>
      </div>
    </div>
  );
};

export default PaymentOptions;
