import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import constants from './constants/app-constants'
import incrementActions from './actions/app-actions'
import TodoStore from './stores/count-store'

class App extends Component {

    constructor(props) {
        super(props)
        // noinspection JSAnnotator
        this.state = {
            count: TodoStore.getCount
        }
        this.increment = this.increment.bind(this)
        this._onChange = this._onChange.bind(this)
    }

    increment() {
        incrementActions.incrementCount()
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange)
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange())
    }

    _onChange() {
        this.setState({
            count: TodoStore.getCount()
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
