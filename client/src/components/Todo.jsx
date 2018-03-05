import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
const styles = {
    width: '90%',
    // height: '40px',
    fontSize: 'larger',
    border: '1px solid black',
    margin: '5px 4%',
    borderRadius: '10px',
    paddingTop: '15px',
    paddingLeft: '15px'
}
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  background: isDragging ? 'lightgreen' : 'aquamarine',
  ...styles,
  ...draggableStyle
});


let Todo = ({ item, finished, onClick, idx, id}) => {
  return (
  <Draggable draggableId={id} index={idx}>
    {(provided, snapshot) => (
        <div ref={provided.innerRef} 
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style, finished)}>
          <p onClick={onClick} style={{textDecoration: finished === true ? 'line-through' : 'none'}}>{item}</p>
          {provided.placeholder}
        </div> 
    )}
  </Draggable>
  )
}

export default Todo;