// @flow

import React, { Component } from 'react'
import { Button } from 'reactstrap';

import Intro from './Intro'
import Solutions from './Solutions'
import Platform from './Platform'
import About from './About'

import './App.css'
import logo from './logo.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Herding</h2>
        </div>

        <Button color="danger">With Bootstrap 4!</Button>

        <Intro />
        <Solutions />
        <Platform />
        <About />
      </div>
    )
  }
}
export default App
