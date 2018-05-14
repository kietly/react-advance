import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import reducer from './reducers/index'
import {createStore} from 'redux'

let store = createStore(reducer)

ReactDOM.render(<App store={store}/>, document.getElementById('app'));
