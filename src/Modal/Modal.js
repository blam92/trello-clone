import React from 'react';
import './Modal.css';

let Modal = (props) => {
  let createBoard = () => {
    let board = {
      title: this.nameNode.value,
      description: this.descNode.value,
      cards: [
        {title: 'Your first card', items: ['Add items by just typing above and pressing enter!']}
      ]
    };
    this.nameNode.value = '';
    this.descNode.value = '';
    
    props.addBoard(board);
  }

  return (
    <div id="myModal" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">Create new board</h4>
          </div>
          <div className="modal-body">
            <p>Board name</p>
            <input className="form-control" type="text" ref={(node) => this.nameNode = node}/>
            <p>Board description</p>
            <input className="form-control" type="text" ref={(node) => this.descNode = node}/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={createBoard} data-dismiss="modal">Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;