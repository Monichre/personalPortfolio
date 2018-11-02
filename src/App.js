import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/home'
import {
  getContentfulContent
} from './api'
import './App.css'

const {
  Provider,
  Consumer
} = React.createContext()

class App extends Component {
  constructor() {
    super()
    this.state = {
      content: {}
    }
  }
  componentWillMount () {
    const data = getContentfulContent().then(res => {
      this.setState({
        content: {
          ... res
        }
      })
    })
  }
  hamburgerClick = e => {
    e.preventDefault()
    const navigation = document.getElementById('navigation')
    const filter = document.getElementById('filter')

    navigation.classList.toggle('open')
    filter.classList.toggle('filter-open')
  }
  render() {
    return (
      <BrowserRouter>
        <Provider value={this.state.content}>
          <div id="filter" />
          <Route exact path="/" render={() => (
            <Consumer>
            {
              context => <Home context={context} />
            }
            </Consumer>
            )} />
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App
