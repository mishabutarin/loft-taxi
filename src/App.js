import React from 'react';
import './App.css';
import logo1 from './icons/logo1.png'
import logo2 from './icons/logo2.png'
import { Login } from './login/Login';
import { SignUp } from './components/signUp/SignUp.jsx'
import { Profile } from './components/profile/Profile';

const PAGES = {
  signUp: <SignUp />,
  profile: <Profile />,
  login: <Login />

};

class App extends React.Component {
  state = { currentPage: "map" };
  navigateTo = ( page ) => {
    this.setState({currentPage: page});
  };
  render() {
    return <>
    <div className='Wrapper'>
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
    <main>
      <section>
        {PAGES[this.state.currentPage]}
      </section>
    </main>
    </div>
    </>
  }
}
export default App;
