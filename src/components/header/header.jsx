import React from 'react';
import logo1 from '../../icons/logo1.png'
import logo2 from '../../icons/logo2.png'
class Header extends React.Component {
    constructor(props){
        super( props )
        this.state = {currentPage: "map"};
        this.navigateTo = this.navigateTo.bind(this);
    }
    navigateTo = (page) => {
        this.setState({ currentPage:page})
    }

    render(){
        return(
<header className='header'>
      <ul className='logos__list'>
        <li className='logos__item'><img src={ logo1 } className="logo1__img" alt='logo1'></img></li>
      <li className='logos__item'><img src={ logo2 } className="logo2__img" alt='logo2'></img></li>
      </ul>
      <nav>
        <ul className='menu__list'>
          <li className='menu__item'>
            <button className='menu__button' onClick={() => {this.navigateTo("map");}}>Карта</button>
          </li>
          <li className='menu__item' >
            <button className='menu__button' onClick={() => {this.navigateTo("pofile");}}>Профиль</button>
          </li>
          <li className='menu__item'>
            <button className='menu__button' onClick={() => {this.navigateTo("login");}}>Выйти</button>
          </li>
        </ul>
      </nav>
    </header>
        )
    }
}
export default Header;