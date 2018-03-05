import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';


let Input = ({ dispatch }) => {
  let inputNode;
  let addItem = () => {
    dispatch(actions.addTodo(inputNode.value));
    inputNode.value = '';
  }
  return (
    <div>
      <input ref={node => {
        inputNode = node;
      }} onKeyPress={(e) => e.key === 'Enter' ?  addItem() : null}/>
      <button onClick={addItem}>Add</button>
    </div>);
}

Input = connect()(Input);
export default Input;

