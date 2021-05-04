import React, { Component, useState, useContext } from "react";
import { DataContext } from "../Context";
import "../css/Capacity.css";

const Capacities = function(props) {
  const { capacities } = props;
  const { selectedCapacity, updateSelectedCapacity } = useContext(DataContext);
  return (
    <div className="size-container">
      {capacities.map((capacity, index) => {
        const activeClass =
          capacity === selectedCapacity ? "size active" : "size";
        return (
          <button
            className={activeClass}
            onClick={() => updateSelectedCapacity(capacity)}
            key={index}
          >
            {capacity} GB
          </button>
        );
      })}
    </div>
  );
};

export default Capacities;
