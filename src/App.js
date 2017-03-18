import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import LoginPage from './pages/Login'

export class App extends Component {

  state = {
    userName: null
  }

  componentDidMount () {
    let userName = localStorage.getItem('userName')
    this.setState({ userName: userName })
  }

  setUserName (userName) {
    localStorage.setItem('userName', userName)
    this.setState({ userName: userName })
  }

  render () {
    if (!this.state.userName) {
      return <LoginPage setUserName={this.setUserName.bind(this)} />
    }

    return <h1>You are logged in {this.state.userName}</h1>
  }
}