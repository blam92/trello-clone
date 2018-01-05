import React, { Component } from 'react';
import './BoardDetails.css';
import BoardItem from '../BoardItem/BoardItem';
import Card from '../Card/Card';
import AddListCard from '../AddListCard/AddListCard';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


class BoardDetails extends Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteBoard = this.deleteBoard.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.dragAndDrop = this.dragAndDrop.bind(this);
    this.sortDraggedItems = this.sortDraggedItems.bind(this);
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

  dragAndDrop(fromListIndex, toListIndex, draggedItemIndex) {
    this.props.dnd(this.props.board._id, fromListIndex, toListIndex, draggedItemIndex);
  }

  sortDraggedItems(listIndex, draggedItemIndex, hoveredItemIndex) {
    this.props.sortDraggedItems(this.props.board._id, listIndex, draggedItemIndex, hoveredItemIndex);
  }

  render() {
    let cards = this.props.board.cards.map((card, i) => {
      return <Card cardData={card} key={i} index={i} addFunction={this.addItem} deleteList={this.deleteList} 
      dnd={this.dragAndDrop} sortDraggedItems={this.sortDraggedItems}/>;
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

// export default BoardDetails;
export default DragDropContext(HTML5Backend)(BoardDetails);