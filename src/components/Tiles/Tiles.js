/*  Tiles.js is the container for the 6 Tile 
    components. This dumb component will do 
    nothing more than display the colors given
    to it. Stupid component.
*/

import React from 'react';
import Tile from './Tile/Tile'

const Tiles = props => {
    // source - https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const colors = props.colors;
    shuffleArray(colors);
    return colors.map(( color, index ) => {
        return <Tile 
            color={color}
            key={color.join('')}
            click={() => {props.clicked(index)}}
        />
    });
}

export default Tiles;