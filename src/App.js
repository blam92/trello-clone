import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import BoardContainer from './BoardContainer/BoardContainer';
import Modal from './Modal/Modal';

let boards = [
  {title: 'Code Review', description: 'Board for all code related stuff'},
  {title: 'Design', description: 'Design priorities'},
  {title: 'Upcoming Sprint', description: 'Backlog of upcoming features'},
  {title: 'Maintenance', description: 'To do technical tasks'}
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: boards
    }
    this.addBoard = this.addBoard.bind(this);
  }

  addBoard(board) {
    this.setState({
      boards: boards.concat([board])
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <BoardContainer boards={this.state.boards}/>
        <Modal addBoard={this.addBoard}/>
      </div>
    );
  }
}

export default App;
