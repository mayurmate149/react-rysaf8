import React, { useState, useContext } from "react";
import { DataContext } from "../Context";
import "../css/PaymentOptions.css";

const FullPayInDetails = amount => {
  const { price } = amount;
  return (
    <div className="full-pay-in">
      <div className="one-time-payment">
        <div>one-timepayment</div>
        <div className="price">$ {price}</div>
      </div>
    </div>
  );
};
const MonthlyPayInDetails = amount => {
  const { price } = amount;
  return (
    <div className="full-pay-in">
      <div className="one-time-payment">
        <div>Monthly Installment</div>
        <div>
          <div className="price">${(price / 24).toFixed(2)}/mo</div>
          <div>for 24 mo.*</div>
        </div>
      </div>
      <div className="one-time-payment">
        <div>Monthly Installment</div>
        <div>
          <div className="price">${(price / 9).toFixed(2)}/mo</div>
          <div>for 9 mo.*</div>
        </div>
      </div>
      <div className="one-time-payment">
        <div>Monthly Installment</div>
        <div>
          <div className="price">${(price / 6).toFixed(2)}/mo</div>
          <div>for 6 mo.*</div>
        </div>
      </div>
      <div className="one-time-payment">
        <div>Monthly Installment</div>
        <div>
          <div className="price">${(price / 3).toFixed(2)}/mo</div>
          <div>for 3 mo.*</div>
        </div>
      </div>
    </div>
  );
};

const PaymentOptions = function(price) {
  // const { selectedColor, updateSelectedColor } = useContext(DataContext);
  const [fullPayInActive, setFullPayInActive] = useState(false);
  const [monthlyPayInActive, setmonthlyPayInActive] = useState(false);

  const onFullPayInClick = () => {
    setFullPayInActive(true);
    setmonthlyPayInActive(false);
  };
  const onMonthlyPayInClick = () => {
    setmonthlyPayInActive(true);
    setFullPayInActive(false);
  };

  return (
    <div className="mt-md mb-md">
      <h3 className="option-heading">Choose Payment Options</h3>
      <div className="payment-option-container">
        <div
          className={fullPayInActive ? "active" : ""}
          onClick={() => onFullPayInClick()}
        >
          Pay in full
        </div>
        <div
          className={monthlyPayInActive ? "active" : ""}
          onClick={() => onMonthlyPayInClick()}
        >
          Pay monthly
        </div>
      </div>
      {fullPayInActive && <FullPayInDetails {...price} />}
      {monthlyPayInActive && <MonthlyPayInDetails {...price} />}
    </div>
  );
};

export default PaymentOptions;
