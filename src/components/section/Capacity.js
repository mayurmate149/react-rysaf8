import React, { Component, useState } from 'react';
import '../css/Capacity.css';

const Capacities = function (props) {
    const { capacities } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="size-container">
            {
                capacities.map((capacity, index) => {
                    const activeClass = activeIndex === index ? 'size active' : 'size';
                    return <button className={activeClass} onClick={() => setActiveIndex(index)} key={index} >{capacity} GB</button>
                })
            }
        </div>
    )
}

export default Capacities
