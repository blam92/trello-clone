import React from 'react';
import './Header.css';

let Header = (props) => (
  <header className="header">
    <h2 id="title">Trello Clone</h2>
    <button className="btn btn-default" 
    data-toggle="modal" data-target="#myModal">New Board</button>
  </header>
);

export default Header;