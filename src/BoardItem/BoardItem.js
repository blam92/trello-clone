import React, {Component} from 'react';
import './BoardItem.css';

class BoardItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="board-item card">
        <div className="board-header">
          <p id="board-name">BoardName</p>
        </div>
        <p id="board-description">This board is about something really interesting</p>
      </div>
    );
  }
}

export default BoardItem;