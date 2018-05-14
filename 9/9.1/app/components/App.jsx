import React, { Component } from 'react'

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
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: <Home />
        }
        this.gotoAbout = this.gotoAbout.bind(this)
        this.gotoHome = this.gotoHome.bind(this)
    }

    gotoAbout() {
        this.setState({
            view: <About />
        })
    }

    gotoHome() {
        this.setState({
            view: <Home />
        })
    }

  render(){
    return (
      <div>
          {this.state.view}
          <button onClick={this.gotoAbout}>Goto About</button>
          <button onClick={this.gotoHome}>Goto Home</button>
      </div>
    )
  }
}
