import React from 'react';
import store from '../../redux/reducer.js';
let idCounter = 0;
let Input = (props) => {
  let inputNode = null;

  let addItem = (item) => {
    store.dispatch({id: idCounter, type: 'ADD_TODO', item: item})
    idCounter++;
    inputNode.value = '';
  }

  return (
  <div>
    <input ref={(node) => inputNode = node}/>
    <button onClick={() => addItem(inputNode.value)}>Add</button>
  </div>)
}

export default Input;