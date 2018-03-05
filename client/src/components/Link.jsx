import React from 'react';

let Link = ({ dispatch, text, active, filter, onClick }) => {
  if(active) {
    return <span>{text}</span>
  }

  return (
    <a href="#" onClick={onClick}>{text}</a>
  )
}

export default Link;