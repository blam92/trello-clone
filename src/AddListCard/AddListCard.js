import React from 'react';
import Card from '../Card/Card';

let AddListCard = (props) => {
  let defaultData = {
      title: 'Add new list', 
      items: ['enter a title for the list :)'],
    }
  
  return (
    <div className="add-list-card">
      <Card cardData={defaultData}/>
    </div>
  );
}

export default AddListCard;