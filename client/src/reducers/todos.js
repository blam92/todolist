const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {id: action.id, item: action.item, finished: false}
    case 'TOGGLE_TODO':
      return {...state, finished: !state.finished}
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO':
      return state.map((item) => item.id === action.id ? todo(item, action) : item);
    case 'CHANGE_ORDER':
      let newState = state.slice();
      const [removed] = newState.splice(action.sourceIdx, 1);
      newState.splice(action.destinationIdx, 0, removed);
      return newState;
    default:
      return state;
  }
}

export default todos;