import React from 'react';
import store from '../../redux/reducer.js';
const styles = {
  filters: {
    margin: "5px 5px"
  }
}

let Filters = ({visibilityFilter, filter, textLink}) => {
  if(visibilityFilter === filter) {
    return (
      <span>{textLink}</span>
    );
  }
  return (
  <div>
    <a href="#" style={styles.filters} onClick={() => {
      store.dispatch({type: 'SET_VISIBILITY_FILTER', filter});
    }}>{textLink}</a>
  </div>);
}

export default Filters;