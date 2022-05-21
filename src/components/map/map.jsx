import React from 'react';
import map from '../../icons/map.png'
class Map extends React.Component{
    constructor( props ){
        super(props);
        this.state = {currentPage:Map};
    }
    render (){
        return(
            <div className='wrapper'>
               <main className='map__main'>
                   <img src={ map } alt="map" />
               </main>
            </div>
            
        );
    }
}
export default Map;