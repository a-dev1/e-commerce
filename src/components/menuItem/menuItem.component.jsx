import React from 'react';

const MenuItem = (prop) => (
    <div className="menu-item">
        <div className="content">
            <h1 className="title">{prop.title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;