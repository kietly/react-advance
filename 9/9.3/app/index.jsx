import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,
        Switch ,
        Route,
        Link } from 'react-router-dom'

import App from './pages/App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' compon component={App} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
        </Switch>
    </Router>

    , document.getElementById('app')
);
