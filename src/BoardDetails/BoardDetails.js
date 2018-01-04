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
  }

  addItem(textValue, cardIndex) {
    this.props.addItem(this.props.board.id, cardIndex, textValue);
  }

  addList(cardTitle) {
    this.props.addList(this.props.board.id, cardTitle);
  }

  render() {
    let cards = this.props.board.cards.map((card, i) => {
      return <Card cardData={card} key={i} index={i} addFunction={this.addItem}/>;
    });
    return (
      <div>
        <div className="detail-header"> 
          <BoardItem boardData={this.props.board}/>
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