import React from 'react';
import { Component } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './Constants';


const ItemSource = {
  beginDrag(props) {
    return {
      index: props.index,
      listIndex: props.myListIndex
    }
  }
};

let collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Item extends Component {

  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
    <p className="card item" style={{
      opacity: isDragging ? 0.5 : 1,
      fontWeight: 'bold',
      cursor: 'move'
    }}>{this.props.text}</p>
    );
  }
}

// export default Item;
export default DragSource(ItemTypes.ITEM, ItemSource, collect)(Item);