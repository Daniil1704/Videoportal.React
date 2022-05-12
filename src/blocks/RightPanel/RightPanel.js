import React from 'react';
import './RightPanel.css';
import Favourites from '../../img/star.svg'
function RightPanel(props) {
  return (

      <div className='rightpanel__item'>
        <div className='rightpanel__item_heading'>
          <h2 className='rightpanel__item_title '>{props.title}</h2>
          <button className='rightpanel__item_favourites'><img className='favourites' src={Favourites} alt="" /></button>
        </div>
        <div className='rightpanel__item_info'>
          <p className='rightpanel__item_duration rightpanel__font'>Длительность <span className='rightpanel__span'>{props.time}</span></p>
          <p className='rightpanel__item_instructor rightpanel__font'>Инструктор <span className='rightpanel__span'>{props.instructor}</span></p>
          <p className='rightpanel__item_date rightpanel__font'>Дата обновления  <span className='rightpanel__span'>{props.date}</span></p>
          <p className='rightpanel__item_type rightpanel__font'>Тип  <span className='rightpanel__span'>{props.type}</span></p>
        </div>
     
        <p className='rightpanel__item_subtitle rightpanel__font'>{props.text}</p> 
        <a href="" className='rightpanel__item_link'><button className='rightpanel__item_button'>Перейти</button></a>
      </div>
      
  );
}

export default RightPanel;