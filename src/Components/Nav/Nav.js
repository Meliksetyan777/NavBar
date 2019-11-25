import React from 'react';

const Nav = (props) => {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a onClick={()=> props.onTabChange("Product")} className="nav-link" href="#">Product</a>
            </li>
            <li className="nav-item">
                <a onClick={()=> props.onTabChange("Cart")} className="nav-link" href="#">Cart</a>
            </li>
        </ul>
    );
}

export default Nav ;