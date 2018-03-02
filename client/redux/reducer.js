import { createStore } from 'redux';

const todo = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return { id: action.id, item: action.item, finished: false}
    case 'TOGGLE_TODO':
      return { ...state, finished: !state.finished }
    default: 
      return state;
  }
}

const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'REMOVE_TODO':
      return [...state.slice(0, action.id), ...state.slice(action.id + 1)];
    case 'TOGGLE_TODO':
      return state.map((itm) => (itm.id === action.id ? todo(itm, action) : itm));
    default:
      return state;
  }
}
let store = createStore(todos);
export default store;