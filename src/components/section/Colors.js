import React, { Component, useState } from 'react'
import '../css/Capacity.css';

const Colors = function (props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const { colors } = props;
    return (
        <div className="colors">
            {
                colors.map((color, index) => {
                    const activeClass = activeIndex === index && 'active';
                    return <button className={activeClass} onClick={() => setActiveIndex(index)} key={index} style={{ background: color }}></button>
                })
            }
        </div>
    )
}

export default Colors
