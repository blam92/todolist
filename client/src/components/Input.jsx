import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/index.js';


let Input = ({ dispatch }) => {
  let inputNode;
  return (
    <div>
      <input ref={node => {
        inputNode = node;
      }}/>
      <button onClick={() => dispatch(actions.addTodo(inputNode.value))}>Add</button>
    </div>);
}

Input = connect()(Input);
export default Input;

