import React, { Component } from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import '../css/App.css';
import { addMessagesFromBackend, startLoadingMessagesFromBackend, stopLoadingMessagesFromBackend } from '../actions/Actions'


class App extends Component {

  componentDidMount() {
    this.getMessagesFromBackend()
  }

  getMessagesFromBackend() {
    this.props.startLoadingMessagesFromBackend()
    var $this = this
    axios.get('/api/v1/hello')
        .then((resp) => {
          let characters = resp.data;
          console.log(characters)
          $this.props.addMessagesFromBackend(characters)
        })
        .catch(function (error) {
          console.log(error)
          $this.props.stopLoadingMessagesFromBackend()
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
    addMessagesFromBackend: (images) => {
      dispatch(addMessagesFromBackend(images));
    },
    startLoadingMessagesFromBackend: () => {
      dispatch(startLoadingMessagesFromBackend());
    },
    stopLoadingMessagesFromBackend: () => {
      dispatch(stopLoadingMessagesFromBackend());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);