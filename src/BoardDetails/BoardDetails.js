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

let fakeItem = {id: 3, title: 'Maintenance', description: 'To do technical tasks'}
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
    let newCard = {title: cardTitle, items: []};
    this.setState({
      cards: this.state.cards.concat([newCard])
    });
  }

  render() {
    let cards = this.state.cards.map((card, i) => {
      return <Card cardData={card} key={i} index={i} addFunction={this.addItem}/>;
    });
    return (
      <div>
        <div className="detail-header"> 
          <BoardItem boardData={fakeItem}/>
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