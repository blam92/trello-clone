import React from 'react';
import './Header.css';

let Header = (props) => (
  <header className="header">
    <h2 id="title">Trello Clone</h2>
    <button className="btn btn-default">New Board</button>
  </header>
);

export default Header;