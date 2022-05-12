import React from 'react';
import './LeftPanel.css';
function LeftPanel(props) {
 
  return (
     
      <a href='/' className='leftpanel__item'>
        <img className='leftpanel__img' src={props.image} alt="" />
        <h2 className='leftpanel__item_text'>{props.title}</h2>
      </a>
      

  );
}

export default LeftPanel;