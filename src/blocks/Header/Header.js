import React from 'react';
import './Header.css';

import logo from '../../img/logo.png'
import avatar from '../../img/avatar.png'
function Header() {
    return (
      <header className='header'>
        <div className='header__panel_left'>
          <h1 className='header__name'>ВИДЕОПОРТАЛ</h1>
          <div className='header__button'>
            <a className='header__grid' href="#"></a>
          </div>
        </div>
        <div className='header__panel_right'>
          <img className='header__logo' src={logo} alt="" />
          <input className='header__search' type="text" placeholder="Поиск"/>
          <div className='header__user'>
            <div className='header__user_info'> 
              <p className='header__user-name'>Имя Фамилия</p>
              <p className='header__user-type'>Ученик</p>
            </div>
           
            <img className='header__user-avatar' src={avatar} alt="" />
          </div>
        </div>
      </header>
    );
}

export default Header;