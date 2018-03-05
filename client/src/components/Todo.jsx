import React from 'react';
let Todo = ({ item, finished, onClick}) => {
  
  return (<li style={finished ? {textDecoration: 'line-through'} : {textDecoration: 'none'}} onClick={onClick}>{ item }</li>)
}

export default Todo;