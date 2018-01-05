import React from 'react';
import './Card.css';
import Item from './Item';

let Card = (props) => {
  let nodeInput = '';

  let onKeyPress = (e) => {
    if(e.key === 'Enter') {
      props.addFunction(nodeInput.value, props.index);
      nodeInput.value = '';
    };
  }

  let items = props.cardData.items.map((text, i) => {
    return <Item text={text} key={i}/>;
  });

  return (
    <div className="card card-list">
      {props.addList ? null: <img id="close-icon" src="/close-icon.png" alt="close" onClick={() => props.deleteList(props.index)}/>}
      <p>{props.cardData.title}</p>
      <input className="card form-control" 
      ref={(node) => nodeInput = node} 
      onKeyPress={onKeyPress}/>
      {items}
    </div>
  );
}
export default Card;