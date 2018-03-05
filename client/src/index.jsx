import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers/index.js';
import Footer from './components/Footer.jsx';
import Input from './components/Input.jsx';
import Todos from './components/Todos.jsx';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import actions from './actions/index.js';
import Header from './components/Header.jsx';
let App = ({onDragEnd}) => {

  return (
    <div>
      <Header/>
      <DragDropContext onDragEnd={onDragEnd}>
        <Input/>
        <Footer/>
        <Todos/>
      </DragDropContext>
    </div>
  );
}


let mapStateToProps = () => {
  return {}
}

let mapDispatchToProps = (dispatch) => {
  
  return {
    onDragEnd: (result) => {
      if(!result.destination) {
        return;
      }
      dispatch(actions.switchOrder(result.source.index, result.destination.index));
    }
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('app'));