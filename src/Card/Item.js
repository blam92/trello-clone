import React from 'react';
import { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { ItemTypes } from './Constants';
import { findDOMNode } from 'react-dom';


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

let itemTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;
    if(dragIndex === hoverIndex) {
      return;
    }
    //find item rectangle
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
    //find middle on Y axis
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
    //know where the mouse currently is
    const clientOffset = monitor.getClientOffset()
    //get pixes from mouse to top of item
    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    // Only perform the move when the mouse has crossed half of the items height
		// When dragging downwards, only move when the cursor is below 50%
		// When dragging upwards, only move when the cursor is above 50%

		// Dragging downwards
		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return
		}

		// Dragging upwards
		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return
    }
    
    props.sortDraggedItems(props.myListIndex, dragIndex, hoverIndex);
    console.log('triggering!', props.index);  
    monitor.getItem().index = hoverIndex
  }
}

class Item extends Component {

  render() {
    const { connectDragSource, isDragging, connectDropTarget } = this.props;
    const opacity = isDragging ? 0.5 : 1
    return connectDragSource(
      connectDropTarget(
        <p className="card item" style={{
          opacity: opacity,
          cursor: 'move'
        }}>{this.props.text}</p>
      )
    );
  }
}

// export default Item;
export default DropTarget(ItemTypes.ITEM, itemTarget, connect => ({
  connectDropTarget:  connect.dropTarget()
}))(DragSource(ItemTypes.ITEM, ItemSource, collect)(Item));


/* style={{
          opacity: isDragging ? 0.5 : 1,
          fontWeight: 'bold',
          cursor: 'move'
        }}*/