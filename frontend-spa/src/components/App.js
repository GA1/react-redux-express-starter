import React, { Component } from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import '../css/App.css';
import { setMessageFromBackend, startLoadingMessageFromBackend, stopLoadingMessageFromBackend } from '../actions/actions'


class App extends Component {

  componentDidMount() {
    this.getMessageFromBackend()
  }

  getMessageFromBackend() {
    let props = this.props;
    props.startLoadingMessageFromBackend()
    axios.get('/hello')
      .then((resp) => {
        props.setMessageFromBackend(resp.data.message)
      })
      .catch(function (error) {
        console.log(error)
        props.stopLoadingMessageFromBackend()
      });
  }

  render() {
    let message = this.props.message;
    return (
      <div className="app-container">
        <h1 className="app-title">react-redux-express-starter</h1>
        {
          !this.props.isCallingBackend && !!message && ("The backend was successfully called. Its message is: " + message)
        }
        {
          !this.props.isCallingBackend && !message && "The message could not be retrieved from backend :/"
        }
        {
          this.props.isCallingBackend && "Retrieving the message..."
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  let r = state.hskReducer;
  return {
    message: r.message,
    isCallingBackend: r.isCallingBackend,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMessageFromBackend: (message) => {
      dispatch(setMessageFromBackend(message));
    },
    startLoadingMessageFromBackend: () => {
      dispatch(startLoadingMessageFromBackend());
    },
    stopLoadingMessageFromBackend: () => {
      dispatch(stopLoadingMessageFromBackend());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
