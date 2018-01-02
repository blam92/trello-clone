import React, {Component} from 'react';
import './BoardContainer.css';
import BoardItem from '../BoardItem/BoardItem';

class BoardContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="board-container">
        <BoardItem/>
        <BoardItem/>
        <BoardItem/>
        <BoardItem/>
        <BoardItem/>
        <BoardItem/>
      </div>
    );
  }
}

export default BoardContainer;