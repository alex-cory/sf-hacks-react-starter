import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import LoginPage from './pages/Login'
import MessagesPage from './pages/Messages'

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

    return <MessagesPage userName={this.state.userName} />
  }
}