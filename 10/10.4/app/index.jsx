import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import constants from './constants/app-constants'
console.log(constants)

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increase Count</button>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
