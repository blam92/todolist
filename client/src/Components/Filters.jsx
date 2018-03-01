import React from 'react';
const styles = {
  filters: {
    margin: "5px 5px",
    cursor: "pointer"
  }
}
let Filters = (props) => {
  return (
  <div>
    <a style={styles.filters}>All</a>
    <a style={styles.filters}>Done</a>
    <a style={styles.filters}>Pending</a>
  </div>);
}

export default Filters;