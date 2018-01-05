import React, {Component} from 'react';
import './BoardItem.css';

class BoardItem extends Component {

  onCloseClick(e) {
    e.stopPropagation();
    this.props.onCloseButtonPress(this.props.boardData._id);
  }

  render() {
    let board = this.props.boardData;
    return (
      <div className="board-item card" onClick={() => this.props.onBoardSelected(board._id)}>
        <div className="board-header">
          <img id="close-icon" src="/close-icon.png" alt="close" onClick={this.onCloseClick.bind(this)}/>
          <p id="board-name">{board.title}</p>
        </div>
        <p id="board-description">{board.description}</p>
      </div>
    );
  }
}

export default BoardItem;