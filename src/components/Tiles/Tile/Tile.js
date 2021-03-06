/*  Tile.js is the individual tiles of color that will 
    represent one of the color choices in the game. 
    Again, a stupid, dumb component, all it does is show
    the color given to it. Ok well I guess it also will 
    listen for clicks but anyone can do that!
*/
import React from 'react';
import './Tile.css'

const Tile = ( props ) => {
    const style = {
        backgroundColor: `rgb(${props.color.join(', ')})`
    }

    

    return (
        <div className="Tile"
            style={style}
            onClick={props.click}>
        </div>
    )
}

export default Tile;