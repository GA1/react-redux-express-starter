import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import '../css/App.css'
import {
  setMessageFromBackend,
  startLoadingMessageFromBackend,
  stopLoadingMessageFromBackend,
} from '../actions/actions'
import { getMessage, isCallingBackend, wasLastCallSuccessful } from '../selectors/selectors'

class App extends Component {
  componentDidMount() {
    this.getMessageFromBackend()
  }

  getMessageFromBackend() {
    const props = this.props
    props.startLoadingMessageFromBackend()
    axios
      .get('/hello')
      .then((resp) => {
        props.setMessageFromBackend(resp.data.message)
      })
      .catch(function (error) {
        console.log(error)
        props.stopLoadingMessageFromBackend()
      })
  }

  render() {
    const { isCallingBackend, message, wasLastCallSuccessful } = this.props
    return (
      <div className='app-container'>
        <h1 className='app-title'>react-redux-express-starter</h1>
        {wasLastCallSuccessful && 'The backend was successfully called. Its message is: ' + message}
        {!wasLastCallSuccessful && 'The message could not be retrieved from backend :/'}
        {isCallingBackend && 'Retrieving the message...'}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wasLastCallSuccessful: wasLastCallSuccessful(state),
    isCallingBackend: isCallingBackend(state),
    message: getMessage(state),
  }
}

const mapDispatchToProps = () => {
  return {
    setMessageFromBackend,
    startLoadingMessageFromBackend,
    stopLoadingMessageFromBackend,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
