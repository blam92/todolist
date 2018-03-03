import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './Components/Input.jsx';
import Filters from './Components/Filters.jsx';
import store from '../redux/reducer.js';

let render = () => {
  ReactDOM.render(<App {...store.getState()}/>,
   document.getElementById('app'));
};
store.subscribe(render);
console.log(store.getState());

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
      <Filters visibilityFilter={visibilityFilter} textLink={'All'} filter={'SHOW_ALL'}/>
      <Filters visibilityFilter={visibilityFilter} textLink={'Finished'} filter={'SHOW_FINISHED'}/>
      <Filters visibilityFilter={visibilityFilter} textLink={'Pending'} filter={'SHOW_PENDING'}/>
      <ul>
        {visibleTodos.map((todo) => 
          <li key={todo.id} onClick={() => store.dispatch({id: todo.id, type: 'TOGGLE_TODO'})}
          style={{textDecoration: todo.finished ? 'line-through' : 'none'}}>
            {todo.item}
          </li>)}
      </ul>
    </div>);
}

render();