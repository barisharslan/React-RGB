import React from 'react';
import './Header.css'

const Header = ( props ) => {

    return (
        <div className="header">
            <h1>Guess This</h1>
            <h1>RGB({props.color})</h1>
            <h1>Color Code!</h1>
        </div>
    )
}

export default Header;