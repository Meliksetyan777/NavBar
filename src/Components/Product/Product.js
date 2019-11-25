import React, {useEffect, useState} from 'react';
import Card from '../Card/Card';

const Product = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/item")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    return (
            <div>
                {data.map(item => {
                    return <Card item={item} button="Product" buttonClick={props.addToCart}/>
                })}
            </div>
    );
}

export default Product ;