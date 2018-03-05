import React from 'react';
import actions from '../actions/index.js';
import { connect } from 'react-redux';
import Todo from './Todo.jsx';
import { Droppable } from 'react-beautiful-dnd';
let { filterOptions } = actions;

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: 8,
  width: 250,
  height: 500,
  fontSize: 'larger',
  border: '1px solid black',
  borderRadius: '10px'
});

let Todos = ({ visibleTodos, onClick }) => {

  return (
    <Droppable droppableId="1">
      {(provided, snapshot) => (
        <div style={getListStyle(snapshot.isDraggingOver)} ref={provided.innerRef}>
          {visibleTodos.map((todo, idx) => <Todo key={todo.id} {...todo} onClick={() => onClick(todo.id)} idx={idx}/>)}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
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