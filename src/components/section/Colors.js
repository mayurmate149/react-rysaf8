import React, { Component, useState, useContext } from "react";
import { DataContext } from "../Context";
import "../css/Capacity.css";

const Colors = function(props) {
  const { colors } = props;
  const { selectedColor, updateSelectedColor } = useContext(DataContext);

  return (
    <div className="colors">
      {colors.map((color, index) => {
        const activeClass = color.name === selectedColor && "active";
        return (
          <button
            className={activeClass}
            onClick={() => updateSelectedColor(color.name)}
            key={index}
            style={{ background: color.name }}
          />
        );
      })}
    </div>
  );
};

export default Colors;
