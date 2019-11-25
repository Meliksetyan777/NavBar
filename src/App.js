import React, {useEffect, useState} from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import Cart from './Components/Cart/Cart';
import Product from './Components/Product/Product';

function App() {
  const [state, setState] = useState({tab: "Product"})
  const [selected, setSelected] = useState([])

  const onTabChange = (tab) => {
    setState({tab: tab})
  }

  const addToCart = (item) => {
    setSelected([...selected, item])
  }

  return (
    <div className="App">
      <Nav onTabChange={onTabChange} tab={state.tab}/>
      {state.tab === "Product" ? <Product addToCart={addToCart}/> : <Cart selected={selected}/>}
    </div>
  );
}

export default App;

