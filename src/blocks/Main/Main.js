import React from 'react';
import './Main.css';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';
function Main() {
    return (
      <div className='main'>
      <LeftPanel />
      <RightPanel />
      </div>
    );
}

export default Main;