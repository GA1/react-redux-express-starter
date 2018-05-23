import React, { Component } from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import '../css/App.css';
import { setMessageFromBackend, startLoadingMessageFromBackend, stopLoadingMessageFromBackend } from '../actions/Actions'


class App extends Component {

  componentDidMount() {
    this.getMessageFromBackend()
  }

  getMessageFromBackend() {
    this.props.startLoadingMessageFromBackend()
    var $this = this
    axios.get('/api/v1/hello')
      .then((resp) => {
        let message = resp.data.message;
        $this.props.setMessageFromBackend(message)
      })
      .catch(function (error) {
        console.log(error)
        $this.props.stopLoadingMessageFromBackend()
      });
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="app-title">react-redux-express-starter</h1>
        {
          !this.props.isLoading && this.props.message
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
    message: r.message,
    isLoading: r.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMessageFromBackend: (images) => {
      dispatch(setMessageFromBackend(images));
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