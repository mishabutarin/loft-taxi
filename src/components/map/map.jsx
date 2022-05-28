import React from 'react';
import map from '../../icons/map.png';
import Header from '../header/header';
function Map({ navigateTo }){
        return(
            <div className='wrapper'>
                <div>
                    <Header navigateTo={ navigateTo }/>
                    </div>
               <main className='map__main'>
                   <img src={ map } alt="map" />
               </main>
            </div>
        );
}
export default Map;