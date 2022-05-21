import React from 'react';
import './App.css';
import Header from './components/header/header';
import Login from './components/header/header'
import { Profile } from './components/profile/Profile';
import Map from './components/map/map';
const PAGES = {
  login: <Login/>,
  profile: <Profile/>,
  map: <Map/>
}
class App extends React.Component {
  constructor(props){
    super( props )
    this.state = {currentPage: "map"};
}
  render() {
    return <>
    <Header/>
    <main>{PAGES[this.state.currentPage]}</main>
    </>
  }
}
export default App;
