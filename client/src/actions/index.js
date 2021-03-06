let nextTodoIndex = 0;
let addTodo = (item) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoIndex++,
    item
  }
};

let toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
};

let setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};

let switchOrder = (sourceIdx, destinationIdx) => {
  destinationIdx = destinationIdx === -1 ? 0 : destinationIdx;
  return {
    type: 'CHANGE_ORDER',
    sourceIdx,
    destinationIdx
  }
}

let filterOptions = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_FINISHED: 'SHOW_FINISHED',
  SHOW_PENDING: 'SHOW_PENDING'
}

export default {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  filterOptions,
  switchOrder
};