/*  Tiles.js is the container for the 6 Tile 
    components. This dumb component will do 
    nothing more than display the colors given
    to it. Stupid component.
*/

import React from 'react';
import Tile from './Tile/Tile'

const Tiles = props => {
    return props.colors.map(( color, index ) => {
        return <Tile 
            color={color}
            key={color.join('')}
        />
    }) 
}

export default Tiles;