import { createStore, combineReducers } from 'redux';

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
      return state.filter(itm => itm.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map(itm => (itm.id === action.id ? todo(itm, action) : itm));
    default:
      return state;
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SHOW_ALL':
      return action.type;
    case 'SHOW_FINISHED':
      return action.type;
    case 'SHOW_PENDING':
      return action.type;
    default:
      return state;
  }
}

let todoApp = combineReducers({todos, visibilityFilter});
let store = createStore(todoApp);

export default store;