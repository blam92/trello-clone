import React, { Component } from 'react';
import './Card.css';
import Item from './Item';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

const listTarget = {
  drop(props, monitor) {
    let fromList = monitor.getItem().listIndex;
    let toList = props.index;
    if(fromList === toList) return undefined;

    props.dnd(fromList, toList, monitor.getItem().index);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class Card extends Component {
  constructor(props) {
    super(props);

    let nodeInput = '';
    this.getNodeInput = () => nodeInput;
    this.getNodeInput = this.getNodeInput.bind(this);
    this.setNodeInput = (node) => nodeInput = node;
  }

  onKeyPress = (e) => {
    if(e.key === 'Enter' && this.getNodeInput().value.length > 0) {
      this.props.addFunction(this.getNodeInput().value, this.props.index);
      this.getNodeInput().value = '';
    };
  }

  render() {
    let items = this.props.cardData.items.map((text, i) => {
      return <Item text={text} key={i} index={i} myListIndex={this.props.index} sortDraggedItems={this.props.sortDraggedItems}/>;
    });

    const { connectDropTarget } = this.props;
    
    return connectDropTarget(
      <div className="card card-list">
        {this.props.addList ? null: <img id="close-icon" src="/close-icon.png" alt="close" onClick={() => this.props.deleteList(this.props.index)}/>}
        <p>{this.props.cardData.title}</p>
        <input className="card form-control" 
        ref={(node) => this.setNodeInput(node)} 
        onKeyPress={this.onKeyPress}/>
        {items}
      </div>
    );
  }
}
// export default Card;
export default DropTarget(ItemTypes.ITEM, listTarget, collect)(Card);