import React, {Component} from 'react';
import './BoardContainer.css';
import BoardItem from '../BoardItem/BoardItem';

class BoardContainer extends Component {

  render() {
    let boardItems = this.props.boards.map((item, index) => {
      return <BoardItem key={index} boardData={item}/>;
    });

    return (
      <div className="board-container">
        {boardItems}
      </div>
    );
  }
}

export default BoardContainer;