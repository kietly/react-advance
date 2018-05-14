import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {incrementCount} from './actions/index'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let action = incrementCount()
        console.log(action)
    }

    render(){
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
