import React from 'react'

export default function Card(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.item.price}</h6>
            {props.button === "Product" ? <button type="button" class="btn btn-primary btn-sm" onClick={() => props.buttonClick(props.item)}>Add to Cart</button> : <button type="button" class="btn btn-primary btn-sm">Remove</button>}
        </div>
        </div>
    )
}
