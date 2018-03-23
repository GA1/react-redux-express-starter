import React, { Component } from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import '../css/App.css';
import { addCharactersReceivedFromBackend, startLoadingCharactersFromBackend, stopLoadingCharactersFromBackend } from '../actions/Actions'


class App extends Component {

  componentDidMount() {
    this.getImagesFromBackend()
  }

  getImagesFromBackend() {
    this.props.startLoadingCharactersFromBackend()
    var $this = this
    axios.get('/api/v1/characters')
        .then((resp) => {
          let characters = resp.data;
          console.log(characters)
          $this.props.addCharactersReceivedFromBackend(characters)
        })
        .catch(function (error) {
          console.log(error)
          $this.props.stopLoadingCharactersFromBackend()
        });
  }

  render() {
    var characters = this.props.characters
    return (
      <div className="gallery">
        <h1 className="gallary-title">Test HSK writing</h1>
        {
          !this.props.isLoading && characters[0].simplifiedCharacter
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
    characters: r.characters,
    isLoading: r.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCharactersReceivedFromBackend: (images) => {
      dispatch(addCharactersReceivedFromBackend(images));
    },
    startLoadingCharactersFromBackend: () => {
      dispatch(startLoadingCharactersFromBackend());
    },
    stopLoadingCharactersFromBackend: () => {
      dispatch(stopLoadingCharactersFromBackend());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);