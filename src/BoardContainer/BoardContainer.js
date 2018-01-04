import React, {Component} from 'react';
import './BoardContainer.css';
import BoardItem from '../BoardItem/BoardItem';

class BoardContainer extends Component {

  constructor(props) {
    super(props);

    this.onBoardSelected = this.onBoardSelected.bind(this);
  }

  onBoardSelected(boardId) {
    this.props.selectBoard(boardId);
  }

  render() {
    let boardItems = this.props.boards.map((item, index) => {
      return <BoardItem key={index} boardData={item} onBoardSelected={this.onBoardSelected}/>;
    });

    return (
      <div className="board-container">
        {boardItems}
      </div>
    );
  }
}

export default BoardContainer;