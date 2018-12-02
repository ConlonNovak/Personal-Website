import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';
import Project from './Project.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      // <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
      // <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <div className="App">
        <header className="App-header">
          <p>Conlon Novak</p>
        </header>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        <Project name="babble"/>
        <Footer/>
      </div>
    );
  }
}

export default App;