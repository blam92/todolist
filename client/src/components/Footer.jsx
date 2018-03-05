import React from 'react';
import FilterLink from './FooterLink.jsx';
import actions from '../actions/index.js';

let filters = actions.filterOptions;

let Footer = () => (
  <div>
    <FilterLink text={'All'} filter={filters.SHOW_ALL}/>
    {' '}
    <FilterLink text={'Finished'} filter={filters.SHOW_FINISHED}/>
    {' '}
    <FilterLink text={'Pending'} filter={filters.SHOW_PENDING}/>
    {' '}
  </div>
);

export default Footer;