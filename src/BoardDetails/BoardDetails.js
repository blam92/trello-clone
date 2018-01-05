import React, { Component } from 'react';
import './BoardDetails.css';
import BoardItem from '../BoardItem/BoardItem';
import Card from '../Card/Card';
import AddListCard from '../AddListCard/AddListCard';

class BoardDetails extends Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteBoard = this.deleteBoard.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }

  addItem(textValue, cardIndex) {
    this.props.addItem(this.props.board._id, cardIndex, textValue);
  }

  addList(cardTitle) {
    this.props.addList(this.props.board._id, cardTitle);
  }

  deleteBoard(boardId) {
    this.props.deleteBoard(boardId, true);
  }

  deleteList(listInIndex) {
    this.props.deleteList(this.props.board._id, listInIndex);
  }

  render() {
    let cards = this.props.board.cards.map((card, i) => {
      return <Card cardData={card} key={i} index={i} addFunction={this.addItem} deleteList={this.deleteList}/>;
    });
    return (
      <div>
        <div className="detail-header"> 
          <BoardItem boardData={this.props.board} onBoardSelected={() => null} onCloseButtonPress={this.deleteBoard}/>
          <AddListCard addFunction={this.addList}/>
        </div>
        <div className="lists-container">
          {cards}
        </div>
      </div>
    );
  }
}

export default BoardDetails;