import React from 'react';
import actions from '../actions/index.js';
import { connect } from 'react-redux';
import Todo from './Todo.jsx';
let { filterOptions } = actions;
let Todos = ({ visibleTodos, onClick }) => {

  return (
    <ul>
      {visibleTodos.map((todo) => <Todo key={todo.id} {...todo} onClick={() => onClick(todo.id)}/>)}
    </ul>
  )
}

let getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case filterOptions.SHOW_ALL:
      return todos;
    case filterOptions.SHOW_FINISHED:
      return todos.filter(item => item.finished);
    case filterOptions.SHOW_PENDING:
      return todos.filter(item => !item.finished);
    default:
      return todos;
  }
}

let mapStateToProps = (state) => {
  return {
    visibleTodos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(actions.toggleTodo(id))
    }
  }
}

Todos = connect(mapStateToProps, mapDispatchToProps)(Todos);

export default Todos;