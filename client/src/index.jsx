import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './Components/Input.jsx';
import Filters from './Components/Filters.jsx';
import store from '../redux/reducer.js';

let render = () => {
  let increment = () => store.dispatch({type: 'INCREMENT'});
  let decrement = () => store.dispatch({type: 'DECREMENT'});
  ReactDOM.render(<App onIncrement={increment} onDecrement={decrement} value={store.getState()}/>,
   document.getElementById('app'));
};

let counterListener = store.subscribe(render);

let App = ({value, onIncrement, onDecrement}) => (
  <div>
    Add to list:
    <Input/>
    <Filters/>
    <div>{ value }</div>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>);

render();