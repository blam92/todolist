import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './Components/Input.jsx';
import Filters from './Components/Filters.jsx';
import store from '../redux/reducer.js';

let render = () => {
  // let addTodo = store.dispatch({id: 0, type: 'ADD_TODO', item: 'Study'});
  // ReactDOM.render(<App onIncrement={increment} onDecrement={decrement} value={store.getState()}/>,
  //  document.getElementById('app'));
};

store.dispatch({id: 0, type: 'ADD_TODO', item: 'Study'});
store.dispatch({id: 1, type: 'ADD_TODO', item: 'Watch New Girl'});
store.dispatch({id: 1, type: 'TOGGLE_TODO'});
// store.dispatch({id: 0, type: 'REMOVE_TODO'});
console.log(store.getState());

let App = ({value, onIncrement, onDecrement}) => (
  <div>
    Add to list:
    <Input/>
    <Filters/>
  </div>);

render();