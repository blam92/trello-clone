import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import BoardContainer from './BoardContainer/BoardContainer';
import Modal from './Modal/Modal';
import BoardDetails from './BoardDetails/BoardDetails';
import _ from 'underscore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      selectedBoard: -1
    }
    this.addBoard = this.addBoard.bind(this);
    this.addList = this.addList.bind(this);
    this.addItem = this.addItem.bind(this);
    this.selectBoard = this.selectBoard.bind(this);
    this.selectHeader = this.selectHeader.bind(this);
  }

  componentDidMount() {
    var options = { method: 'GET',
               contentType: 'application/json',
               mode: 'cors',
               cache: 'default' };

    
    fetch('http://127.0.0.1:4000/api/boards', options)
    .then((response) => response.json())
    .then((boards) => {
      this.setState({
        boards: boards
      });
    }).catch((err) => console.log('error: ', err));
  }

  addBoard(board) {
    this.setState({
      boards: this.state.boards.concat([board])
    });
  }

  addList(boardId, cardTitle) {
    let newCard = {title: cardTitle, items: []};
    let newBoards = this.state.boards.slice();

    let boardIndex = _.findIndex(newBoards, (board) => board.id === boardId);
    newBoards[boardIndex].cards.push(newCard);
    this.setState({
      boards: newBoards
    });
  }

  addItem(boardId, cardIndex, textValue) {
    let newBoards = this.state.boards.slice();
    let boardIndex = _.findIndex(newBoards, (board) => board.id === boardId);

    newBoards[boardIndex].cards[cardIndex].items.push(textValue);
    this.setState({
      boards: newBoards,
      selectBoard: -1
    });
  }

  selectBoard(boardId) {
    let boardIndex = _.findIndex(this.state.boards, (board) => board.id === boardId);

    this.setState({
      selectedBoard: boardIndex
    });
  }

  selectHeader() {
    this.setState({
      selectedBoard: -1
    });
  }

  render() {
    let mainComponent;
    if(this.state.selectedBoard === -1) {
      mainComponent = <BoardContainer boards={this.state.boards} selectBoard={this.selectBoard}/>;
    } else {
      mainComponent = <BoardDetails board={this.state.boards[this.state.selectedBoard]} addList={this.addList} addItem={this.addItem}/>
    }

    return (
      <div className="App">
        <Header selectHeader={this.selectHeader}/>
        {mainComponent}
        <Modal addBoard={this.addBoard}/>
      </div>
    );
  }
}

export default App;
