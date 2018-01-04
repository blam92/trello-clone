import React, { Component } from 'react';
import './BoardDetails.css';
import BoardItem from '../BoardItem/BoardItem';
import Card from '../Card/Card';
import AddListCard from '../AddListCard/AddListCard';

let cards = [
  {title: 'Monday', items: ['do something', 'do another thing', 'laundry']}, 
  {title: 'Tuesday', items: ['do something', 'do another thing', 'laundry']},
  {title: 'Thursday', items: ['do something', 'do another thing', 'laundry']},
  {title: 'Friday', items: ['do something', 'do another thing', 'laundry']}
]

class BoardDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards
    }

    this.addItem = this.addItem.bind(this);
    this.addList = this.addList.bind(this);
  }

  addItem(textValue, index) {
    let newCards = this.state.cards.slice();
    newCards[index].items = newCards[index].items.concat([textValue]);
    this.setState({
      cards: newCards
    });
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