import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import BoardContainer from './BoardContainer/BoardContainer';
import Modal from './Modal/Modal';
import BoardDetails from './BoardDetails/BoardDetails';

let boards = [
  {id: 0, title: 'Code Review', description: 'Board for all code related stuff'},
  {id: 1, title: 'Design', description: 'Design priorities'},
  {id: 2, title: 'Upcoming Sprint', description: 'Backlog of upcoming features'},
  {id: 3, title: 'Maintenance', description: 'To do technical tasks'}
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
        {/* <BoardContainer boards={this.state.boards}/> */}
        <BoardDetails />
        <Modal addBoard={this.addBoard}/>
      </div>
    );
  }
}

export default App;
