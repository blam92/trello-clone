import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import BoardContainer from './BoardContainer/BoardContainer';
import Modal from './Modal/Modal';
import BoardDetails from './BoardDetails/BoardDetails';
import _ from 'underscore';

let boards = [
  {id: 0, title: 'Code Review', description: 'Board for all code related stuff', 
  cards: [
    {title: 'Front-end', items: ['Head component', 'do another thing', 'onClick']}, 
    {title: 'Back-end', items: ['Set express', 'Set routers']},
    {title: 'Database', items: ['Set schema', 'Set mongoose', 'Get DB provider']},
    {title: 'UX', items: ['CSS styling', 'Animations', 'Logo']}
    ]
  },
  {id: 1, title: 'Design', description: 'Design priorities', 
  cards: [
    {title: 'Monday', items: ['do something', 'do another thing', 'laundry']}, 
    {title: 'Tuesday', items: ['do something', 'do another thing', 'laundry']},
    {title: 'Thursday', items: ['do something', 'do another thing', 'laundry']},
    {title: 'Friday', items: ['do something', 'do another thing', 'laundry']}
    ]
  },
  {id: 2, title: 'Upcoming Sprint', description: 'Backlog of upcoming features',
  cards: [
    {title: 'Monday', items: ['do something', 'do another thing', 'laundry']}, 
    {title: 'Tuesday', items: ['do something', 'do another thing', 'laundry']},
    {title: 'Thursday', items: ['do something', 'do another thing', 'laundry']},
    {title: 'Friday', items: ['do something', 'do another thing', 'laundry']}
    ]
  },
  {id: 3, title: 'Maintenance', description: 'To do technical tasks',
  cards: [
    {title: 'Monday', items: ['do something', 'do another thing', 'laundry']}, 
    {title: 'Tuesday', items: ['do something', 'do another thing', 'laundry']},
    {title: 'Thursday', items: ['do something', 'do another thing', 'laundry']},
    {title: 'Friday', items: ['do something', 'do another thing', 'laundry']}
    ]
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: boards,
      selectedBoard: -1
    }
    this.addBoard = this.addBoard.bind(this);
    this.addList = this.addList.bind(this);
    this.addItem = this.addItem.bind(this);
    this.selectBoard = this.selectBoard.bind(this);
    this.selectHeader = this.selectHeader.bind(this);
  }

  addBoard(board) {
    this.setState({
      boards: boards.concat([board])
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

    console.log(mainComponent);
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
