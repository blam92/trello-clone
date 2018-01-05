import React from 'react';
import Card from '../Card/Card';
import './AddListCard.css';

let AddListCard = (props) => {
  let defaultData = {
      title: 'Add new list', 
      items: ['enter a title for the new list'],
    }
  
  return (
    <div className="add-list-card">
      <Card cardData={defaultData} addFunction={props.addFunction} addList={true}/>
    </div>
  );
}

export default AddListCard;