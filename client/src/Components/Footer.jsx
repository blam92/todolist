import React from 'react';
import Filters from './Filters.jsx';

let Footer = ({ visibilityFilter }) => {
  
  return (
    <div>
      <Filters visibilityFilter={visibilityFilter} textLink={'All'} filter={'SHOW_ALL'}/>
      <Filters visibilityFilter={visibilityFilter} textLink={'Finished'} filter={'SHOW_FINISHED'}/>
      <Filters visibilityFilter={visibilityFilter} textLink={'Pending'} filter={'SHOW_PENDING'}/>
    </div>
  );
}

export default Footer;