import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router,
        Switch ,
        Route,
        Link } from 'react-router-dom'

import App from './pages/App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

class Outer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h3> Some information </h3>
                {this.props.children}
                <p>Some more information</p>
            </div>
        )
    }
}

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/about' component={About} />
        </Switch>
    </Router>

    , document.getElementById('app')
);
