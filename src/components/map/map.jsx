import React from 'react';
import map from '../../icons/map.png'
import Header from '../header/header';
class Map extends React.Component{
    constructor( props ){
        super(props);
        this.state = {currentPage:Map};
        this.navigateTo = this.navigateTo.bind(this);
    }
    navigateTo = (page) => {
        this.setState({ currentPage:page})
    }
    render (){
        return(
            <div className='wrapper'>
                <div>
                    <Header navigateTo={ this.navigateTo }/>
                    </div>
               <main className='map__main'>
                   <img src={ map } alt="map" />
               </main>
            </div>
            
        );
    }
}
export default Map;