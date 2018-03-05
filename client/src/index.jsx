import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers/index.js';
import Footer from './components/Footer.jsx';
import Input from './components/Input.jsx';

let App = () => (
  <div>
    <Input/>
    {/* <Todos/> */}
    <Footer/>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('app'));