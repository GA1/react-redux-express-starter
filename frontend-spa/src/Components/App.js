import React, { Component } from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import '../css/App.css';
import { addMessageFromBackend, startLoadingMessageFromBackend, stopLoadingMessageFromBackend } from '../actions/Actions'


class App extends Component {

  componentDidMount() {
    this.getMessagesFromBackend()
  }

  getMessagesFromBackend() {
    this.props.startLoadingMessageFromBackend()
    var $this = this
    axios.get('/api/v1/hello')
      .then((resp) => {
        let messages = resp.data;
        console.log(messages)
        $this.props.setMessageFromBackend(messages)
      })
      .catch(function (error) {
        console.log(error)
        $this.props.stopLoadingMessageFromBackend()
      });
  }

  render() {
    var messages = this.props.messages
    return (
      <div className="app-container">
        <h1 className="app-title">react-redux-express-starter</h1>
        {
          !this.props.isLoading && messages[0].message
        }
        {
          this.props.isLoading && "loading"
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  let r = state.hskReducer;
  return {
    messages: r.messages,
    isLoading: r.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMessageFromBackend: (images) => {
      dispatch(addMessageFromBackend(images));
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