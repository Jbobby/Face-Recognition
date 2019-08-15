import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className= 'ma3 mt0'>
            <Tilt className="Tilt shadow-2 br3" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner tc pa3"> <img style={{ paddingTop: '5px'}} src={brain} alt='Brain Logo' /></div>
            </Tilt>
        </div>
    );
}

export default Logo;