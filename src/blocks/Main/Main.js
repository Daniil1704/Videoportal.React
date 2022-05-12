import React from 'react';
import './Main.css';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';
function Main(props) {
    return (
      <div className='main'>
          
        <div className='leftpanel'>
              {
          props.leftPanel.map((leftPanel, key) => {
            return <LeftPanel
            key={key}
            title={leftPanel.title}
            image = {leftPanel.image}
              />
            })
          }
        </div>
        <div className='rightpanel'>
              {
          props.rightPanel.map((rightPanel, key) => {
            return <RightPanel
            key={key}
            title={rightPanel.title}
            time={rightPanel.time}
            instructor={rightPanel.instructor}
            date={rightPanel.date}
            type={rightPanel.type}
            text={rightPanel.text}
              />
            })
          }
        </div>
          
      </div>
    );
}

export default Main;