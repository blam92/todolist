import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';
import { combineReducers, createStore } from 'redux';

let store = combineReducers({ todos, visibilityFilter });
export default createStore(store, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());