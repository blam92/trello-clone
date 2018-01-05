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
    this._getBoards();
  }

  addBoard(board) {
    console.log(board);
    this._postOrPutBoard('POST', board);
  }

  addList(boardId, cardTitle) {
    let newCard = {title: cardTitle, items: []};
    let newBoards = this.state.boards.slice();

    let boardIndex = this._findBoardIndex(boardId);
    newBoards[boardIndex].cards.push(newCard);
    this._postOrPutBoard('PUT', newBoards[boardIndex])
  }

  addItem(boardId, cardIndex, textValue) {
    let newBoards = this.state.boards.slice();
    let boardIndex = this._findBoardIndex(boardId);

    newBoards[boardIndex].cards[cardIndex].items.push(textValue);
    this._postOrPutBoard('PUT', newBoards[boardIndex]);
  }

  selectBoard(boardId) {
    let boardIndex = this._findBoardIndex(boardId);

    this.setState({
      selectedBoard: boardIndex
    });
  }

  selectHeader() {
    this.setState({
      selectedBoard: -1
    });
  }

  _getBoards() {
    const options = { method: 'GET',
               contentType: 'application/json',
               mode: 'cors',
               cache: 'default' };

    
    fetch('http://127.0.0.1:4000/api/boards', options)
    .then((response) => response.json())
    .then((boards) => {
      this.setState({
        boards: boards
      }, console.log(boards));
    }).catch((err) => console.log('error: ', err));
  }

  _postOrPutBoard(requestMethod, newBoard) {
    console.log(JSON.stringify(newBoard));
    const options = { 
      method: requestMethod,
      headers: {      
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBoard)
    };

    fetch('http://127.0.0.1:4000/api/boards', options)
    .then((response) => {
      if(!response.ok) return console.log('error', response);
      this._getBoards();
    }).catch((err) => console.log('error: ', err));
  }


  _findBoardIndex = (boardId) => {
    return _.findIndex(this.state.boards, (board) => board._id === boardId);
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
