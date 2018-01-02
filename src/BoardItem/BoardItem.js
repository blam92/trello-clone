import React, {Component} from 'react';
import './BoardItem.css';

class BoardItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let board = this.props.boardData;
    return (
      <div className="board-item card">
        <div className="board-header">
          <p id="board-name">{board.title}</p>
        </div>
        <p id="board-description">{board.description}</p>
      </div>
    );
  }
}

export default BoardItem;