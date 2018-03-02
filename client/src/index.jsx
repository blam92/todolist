import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './Components/Input.jsx';
import Filters from './Components/Filters.jsx';
import store from '../redux/reducer.js';

let render = () => {
  ReactDOM.render(<App todos={store.getState()}/>,
   document.getElementById('app'));
};

store.subscribe(render)
console.log(store.getState());

let App = ({todos}) => (
  <div>
    Add to list:
    <Input/>
    <Filters/>
    <ul>
      {todos.map((todo) => <li key={todo.id}>{todo.item}</li>)}
    </ul>
  </div>);

render();