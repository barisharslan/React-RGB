import React from 'react';
import './Tile.css'

const Tile = ( props ) => {
    return (
        <div className="Tile">
            {props.color}
        </div>
    )
}

export default Tile;