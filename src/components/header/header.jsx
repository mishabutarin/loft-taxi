import React from 'react';
import logo1 from '../../icons/logo1.png'
import logo2 from '../../icons/logo2.png'
function Header({navigateTo}){
        return (
            <div>
<header className='header'>
      <ul className='logos__list'>
        <li className='logos__item'><img src={ logo1 } className="logo1__img" alt='logo1'></img></li>
      <li className='logos__item'><img src={ logo2 } className="logo2__img" alt='logo2'></img></li>
      </ul>
      <nav>
        <ul className='menu__list'>
          <li className='menu__item'>
            <button className='menu__button' onClick={() => {navigateTo("map");}}>Карта</button>
          </li>
          <li className='menu__item' >
            <button className='menu__button' onClick={() => {navigateTo("profile");}}>Профиль</button>
          </li>
          <li className='menu__item'>
            <button className='menu__button' onClick={() => {navigateTo("login");}}>Выйти</button>
          </li>
        </ul>
      </nav>
    </header>
    </div>
        )
    }
export default Header;