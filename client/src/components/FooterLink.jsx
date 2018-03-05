import { connect } from 'react-redux';
import Link from './Link.jsx';
import actions from '../actions/index.js';
let mapStateToProps = (state, ownProps) => {
  return {
    active: state.visibilityFilter === ownProps.filter,
  }
}

let mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(actions.setVisibilityFilter(ownProps.filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);