import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import BoardContainer from './BoardContainer/BoardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BoardContainer/>
      </div>
    );
  }
}

export default App;
