import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './Components/Input.jsx';
import store from '../redux/reducer.js';
import Footer from './Components/Footer.jsx';

let render = () => {
  ReactDOM.render(<App {...store.getState()}/>,
   document.getElementById('app'));
};
store.subscribe(render);

let App = ({todos, visibilityFilter}) => {
  let getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_FINISHED':
        return todos.filter((item) => item.finished);
      case 'SHOW_PENDING':
        return todos.filter((item) => !item.finished);
      default:
        return todos;
    }
  }

  let visibleTodos = getVisibleTodos(todos, visibilityFilter);
  return (
    <div>
      Add to list:
      <Input/>
      <ul>
        {visibleTodos.map((todo) => 
          <li key={todo.id} onClick={() => store.dispatch({id: todo.id, type: 'TOGGLE_TODO'})}
          style={{textDecoration: todo.finished ? 'line-through' : 'none'}}>
            {todo.item}
          </li>)}
      </ul>
      <Footer visibilityFilter={visibilityFilter} />
    </div>);
}

render();