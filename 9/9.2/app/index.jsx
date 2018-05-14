import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <p>Welcome to the home page</p>
            </div>
        )
    }
}

class About extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <p>About us</p>
            </div>
        )
    }
}


ReactDOM.render(
    <Router>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
    </Router>
    , document.getElementById('app')
);
