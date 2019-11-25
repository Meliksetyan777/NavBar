import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';

const Cart = (props) => {
    const [data, setData] = useState([]);
    setData(props.selected)
    return (
      <div>
          {data.map(item => {
             return <Card item={item}/> 
            })}
      </div>
    );
}

export default Cart ;