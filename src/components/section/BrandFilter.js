import React, { Component, useState, useContext } from "react";
import { DataContext } from "../Context";
import "../css/BrandFilter.css";

const BrandFilter = function() {
  const { products, groupBy, activeBrand, updateActiveBrand } = useContext(
    DataContext
  );
  const brands = groupBy(products, "brand");
  brands.unshift("All");

  return (
    <div className="option-filter">
      <ul>
        {brands.map(brand => {
          const activeClss = activeBrand == brand ? "active-brand" : "";
          return (
            <li onClick={() => updateActiveBrand(brand)} className={activeClss}>
              {brand}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BrandFilter;
